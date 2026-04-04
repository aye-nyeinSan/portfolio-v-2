import { experiences } from "@data/WorkExperience";
import WorkTimeline from "@/components/ui/WorkTimeline";

export default function WorksSlot() {
  return <WorkTimeline experiences={experiences} />;
}
