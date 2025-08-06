import { useState, useEffect } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import { validateLeadForm } from "@/utils/validationUtils";
import Loader from "./Loader";

export default function LeadFormModal({ isOpen, onClose, onSubmit, toolName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setError("");
      setLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    const errorMsg = validateLeadForm({ name, email, phone, company });
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onSubmit({ name, email, phone, company, toolName });
      setLoading(false);
      onClose();
    } catch (e) {
      setError("Submission failed. Please try again.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-2 md:px-0">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 w-full max-w-md shadow-2xl animate-fade-in-up">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-6 text-center">
          Join Now to Access {toolName}
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="space-y-4">
              <InputField
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <ErrorMessage message={error} />
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <Button
                onClick={onClose}
                className="w-1/2 bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}