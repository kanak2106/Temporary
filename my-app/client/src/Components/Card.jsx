import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { CheckIcon } from "@heroicons/react/24/outline";
   
  export default function Example(props) {
    return (
      <Card  className="border-black-400 w-full p-8 mt-40 mx-10 bg-white-200">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-black border-pink/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="black"
            className="font-normal uppercase"
          >
            {props.step}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
              <div class="icon">
                             <img src="src\Components\icon.png" width="60"  height="60" alt="S" /> 
                        </div>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
           <p className="px-2 py-2">We primarily provide the tool of Breast Cancer Analyser, that accepts Histopathological Image of the breasts along with the prediction type to give the results with the help of AI/ML.</p>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="pink"
            className="text-white hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Check Now
          </Button>
        </CardFooter>
      </Card>
    );
  }