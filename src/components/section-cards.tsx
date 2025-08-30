import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const cardData = [
  {
    title: "Custom Agent",
    description:
      "Design your own call handling logic with our Custom Agent feature.",
    buttonText: "Create Agent",
    hasAction: true, // Empty action
  },
  {
    title: "Retail Sales Agent",
    description:
      "Engage customers, answer queries, and drive sales for your retail business.",
    buttonText: "Use Template",
    hasAction: true, // Commented action in original
  },
  {
    title: "Finance Sales Agent",
    description:
      "Securely manage client inquiries, provide support,and leads for financial services.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Real Estate Agent",
    description:
      "Automate property inquiries, schedule viewings, and nurture buyers 24/7.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Stationary Shop Agent",
    description:
      "Assist customers with product info, process order inquiries, and provide support for your shop.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Automotive sales agent",
    description:
      "Engage potential buyers, schedule test drives, and provide detailed vehicle information.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Healthcare Appointment Booking Agent",
    description:
      "Streamline patient scheduling, answer FAQs, and send appointment reminders.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "E-commerce Customer Support Agent",
    description:
      "Provide instant assistance with product details, order status, and common queries.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Restaurant Reservation Agent",
    description:
      "Manage table reservations, answer menu questions, and provide opening hours.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "IT Support Helpdesk Agent",
    description:
      "Resolve common technical issues, guide troubleshooting, and manage support tickets.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Education Admissions Agent",
    description:
      "Guide prospective students, answer course inquiries, and schedule informational sessions.",
    buttonText: "Use Template",
    hasAction: false,
  },
  {
    title: "Travel and Hospitality Agent",
    description:
      "Assist with booking inquiries, manage reservations, and provide destination information.",
    buttonText: "Use Template",
    hasAction: false,
  },
];

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 md:grid-cols-3">
      {cardData.map((card, index) => (
        <Card key={index} className="@container/card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {card.title}
            </CardTitle>
            {card.hasAction && <CardAction />}
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {card.description}
            </div>
            <div className="text-muted-foreground mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full"
              >
                {card.buttonText}
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
