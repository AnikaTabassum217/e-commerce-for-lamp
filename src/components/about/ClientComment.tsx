import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { LuUserCircle } from "react-icons/lu";
const ClientComment = () => {
  const clientComments = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula augue vel metus consequat, ut venenatis magna fringilla. Praesent rutrum vitae enim vel auctor. Aliquam aliquam ipsum vitae diam mattis, a vulputate augue euismod. Nunc varius magna ac ligula varius, nec lobortis felis fringilla. Nam euismod mattis nunc, sed efficitur mi efficitur ut. Fusce sed eros vel libero faucibus lacinia. Nunc gravida mollis ante, ultricies bibendum urna aliquam nec. Cras tempor vehicula dolor. Ut id accumsan augue. Etiam urna tortor, pretium id gravida tincidunt, tristique viverra mauris. Pellentesque at tellus a lectus laoreet scelerisque. Vestibulum sed elementum nunc. Etiam eu maximus nulla. Aliquam vel eleifend erat, eu dapibus nibh. Duis sit amet felis at ligula molestie tempus. Mauris justo ante, porttitor id accumsan sit amet, porttitor rhoncus dui.",
      icon: <LuUserCircle size={80} />, // You can add the image URL here if needed
      name: 'Tom Cruise',
      designation: 'Web Developer',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula augue vel metus consequat, ut venenatis magna fringilla. Praesent rutrum vitae enim vel auctor. Aliquam aliquam ipsum vitae diam mattis, a vulputate augue euismod. Nunc varius magna ac ligula varius, nec lobortis felis fringilla. Nam euismod mattis nunc, sed efficitur mi efficitur ut. Fusce sed eros vel libero faucibus lacinia. Nunc gravida mollis ante, ultricies bibendum urna aliquam nec. Cras tempor vehicula dolor. Ut id accumsan augue. Etiam urna tortor, pretium id gravida tincidunt, tristique viverra mauris. Pellentesque at tellus a lectus laoreet scelerisque. Vestibulum sed elementum nunc. Etiam eu maximus nulla. Aliquam vel eleifend erat, eu dapibus nibh. Duis sit amet felis at ligula molestie tempus. Mauris justo ante, porttitor id accumsan sit amet, porttitor rhoncus dui.',
      icon: <LuUserCircle size={80} />, // You can add the image URL here if needed
      name: 'Bill Gates',
      designation: 'Python Developer',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula augue vel metus consequat, ut venenatis magna fringilla. Praesent rutrum vitae enim vel auctor. Aliquam aliquam ipsum vitae diam mattis, a vulputate augue euismod. Nunc varius magna ac ligula varius, nec lobortis felis fringilla. Nam euismod mattis nunc, sed efficitur mi efficitur ut. Fusce sed eros vel libero faucibus lacinia. Nunc gravida mollis ante, ultricies bibendum urna aliquam nec. Cras tempor vehicula dolor. Ut id accumsan augue. Etiam urna tortor, pretium id gravida tincidunt, tristique viverra mauris. Pellentesque at tellus a lectus laoreet scelerisque. Vestibulum sed elementum nunc. Etiam eu maximus nulla. Aliquam vel eleifend erat, eu dapibus nibh. Duis sit amet felis at ligula molestie tempus. Mauris justo ante, porttitor id accumsan sit amet, porttitor rhoncus dui.',
      icon: <LuUserCircle size={80} />, // You can add the image URL here if needed
      name: 'Elon Musk',
      designation: 'PHP Developer',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula augue vel metus consequat, ut venenatis magna fringilla. Praesent rutrum vitae enim vel auctor. Aliquam aliquam ipsum vitae diam mattis, a vulputate augue euismod. Nunc varius magna ac ligula varius, nec lobortis felis fringilla. Nam euismod mattis nunc, sed efficitur mi efficitur ut. Fusce sed eros vel libero faucibus lacinia. Nunc gravida mollis ante, ultricies bibendum urna aliquam nec. Cras tempor vehicula dolor. Ut id accumsan augue. Etiam urna tortor, pretium id gravida tincidunt, tristique viverra mauris. Pellentesque at tellus a lectus laoreet scelerisque. Vestibulum sed elementum nunc. Etiam eu maximus nulla. Aliquam vel eleifend erat, eu dapibus nibh. Duis sit amet felis at ligula molestie tempus. Mauris justo ante, porttitor id accumsan sit amet, porttitor rhoncus dui.',
      icon: <LuUserCircle size={80} />, // You can add the image URL here if needed
      name: 'Mark Zuckerberg',
      designation: '.NET Developer',
    },
  ];
  return (
    <>
      <Carousel className="bg-gray-00  border-solid ">
        <CarouselContent>
          {clientComments.map((client, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent>            
                    <div className="flex flex-col items-center justify-center gap-2 p-10 rounded-full">
                    <div className="mt-4">{client.description}</div>
                    <div className="w-20 h-20 mt-12">{client.icon}</div>
                    <div className="text-lg font-semibold">{client.name}</div>
                    <div className="text-sm ">{client.designation}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
export default ClientComment