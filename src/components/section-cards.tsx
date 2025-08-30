import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          {/* <CardDescription>Total Revenue</CardDescription> */}
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Custom Agent
          </CardTitle>
          <CardAction>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Send and Receive SMS and MMS via API on Whatsapp
          </div>
          <div className="text-muted-foreground mt-4">
           <Button variant="outline" size="sm" className="w-full rounded-full">
            Create Profile
           </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          {/* <CardDescription>New Customers</CardDescription> */}
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Voice
          </CardTitle>
          <CardAction>
            {/* <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge> */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Makr and Recevice and control calls globally
          </div>
          <div className="text-muted-foreground mt-4">
            <Button variant="outline" size="sm" className="w-full rounded-full">
              Create Application
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
         
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
           Numbers
          </CardTitle>
  
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Expand your global presence with local numbers, national numbers, and toll-free numbers.
          </div>
          <div className="text-muted-foreground mt-4">
            <Button variant="outline" size="sm" className="w-full rounded-full">
              Buy Numbers
            </Button>
          </div>
        </CardFooter>
      </Card>
      {/* <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card> */}
    </div>
  )
}
