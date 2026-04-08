import CertificateCard from "@/components/CertificateCard"
export default function CertificatePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-brand-bg px-10 max-sm:px-4 max-sm:py-10">
        <div className="my-30">
          <CertificateCard />
        </div>
      </div>
    );
}