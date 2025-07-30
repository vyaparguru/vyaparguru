import ReferralPage from "@/components/ReferralPages/ReferralPages.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black pb-20 pt-40 px-4">
      <ReferralPage
        imageUrl="/referral-page-images/shiprocket.jpg"
        title="Shiprocket"
        tagline="India's largest eCommerce enablement platform providing digital retailers an end-to-end customer experience platform. "
        features={[
          'Multi-functional dashboard',
          'Multiple pickup locations',
          'Quick inventory management',
          'Early COD remittance'
        ]}
        rating={4.5}
        referralLink="https://example.com/vivomeetings?ref=your-code"
        buttonLabel="Sign up for free"
      />
    </div>
  )
}
