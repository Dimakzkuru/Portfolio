import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { Input } from "@components/ui/input";
const formSchema = z.object({
  name: z.string().nonempty("Name is Required"),
  email: z.string().email("Invalid Email Address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Thank you for reaching out! I'll get back to you soon.");
    form.reset();
  };
  return (
    <div className="grid grid-rows-[auto,1fr] grid-cols-1 md:grid-cols-2 gap-8 px-60 py-10 rounded-3xl shadow backdrop-blur-md">
      {/* First Row: Contact Me Title */}
      <div className="flex items-center justify-center mb-12 md:col-span-2">
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </div>

      {/* Second Row: Contact Information and Form */}
      <div className="flex justify-between gap-8 md:col-span-2">
        {/* Left Side: Contact Information */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaPhone className="mr-4 text-primary" />
              <span>09971441145</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-4 text-primary" />
              <span>Calbayog City, Samar Philippines</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-4 text-primary" />
              <a
                href="mailto:michaeldimakilingece@gmail.com"
                className="hover:underline"
              >
                michaeldimakilingece@gmail.com
              </a>
            </li>

            <li className="flex items-center">
              <FaGithub className="mr-4 text-primary" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                https://github.com/Dimakzkuru
              </a>
            </li>
            <li className="flex items-center">
              <FaFacebook className="mr-4 text-primary" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                https://www.facebook.com/DimakzKuru/
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="w-full max-w-xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col"
              >
                {/* Name Field */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Name</FormLabel>
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            className="border-2 pl-10 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
                            placeholder="Enter your name"
                            {...field}
                          />

                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            {/* Custom SVG icon */}
                            <BsPerson className="text-xl dark:text-white text-black" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Email</FormLabel>
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            className="w-full rounded-xl pl-10"
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            {/* Custom SVG icon */}
                            <HiOutlineMail className="text-xl dark:text-white text-black" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Message</FormLabel>
                      <FormControl>
                        <div className="relative w-full">
                          <Textarea
                            className="w-full h-48 rounded-xl pl-10 text-lg"
                            placeholder="Enter your message"
                            {...field}
                          />
                          <span className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500">
                            {/* Custom SVG icon */}
                            <BiMessageRoundedDots className="text-xl dark:text-white text-black" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Let’s Talk
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
