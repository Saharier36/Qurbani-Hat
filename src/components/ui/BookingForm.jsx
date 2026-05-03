"use client";
import {
  Button,
  Modal,
  TextField,
  Label,
  Input,
  FieldError,
  TextArea,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful!");
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onPress={() => setIsOpen(true)}
        className="w-full py-6 text-lg bg-orange-600 hover:bg-orange-700 rounded-xl"
      >
        Book This Animal
      </Button>

      <Modal state={{ isOpen, setIsOpen }}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="bg-[#F7F1E1]">
              <Modal.Header>
                <Modal.Heading>Book Your Qurbani Animal</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <form
                  id="booking-form"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                      if (value.length < 3) {
                        return "Name must be at least 3 characters";
                      }
                      return null;
                    }}
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your Name" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="phone"
                    type="tel"
                    validate={(value) => {
                      if (value.length < 11) {
                        return "Phone number must be at least 11 characters";
                      }
                      return null;
                    }}
                  >
                    <Label>Phone Number</Label>
                    <Input placeholder="+880 1XXX-XXXXXX" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                      ) {
                        return "Please enter a valid email address";
                      }
                      return null;
                    }}
                  >
                    <Label>Email</Label>
                    <Input placeholder="you@example.com" />
                    <FieldError />
                  </TextField>

                  <TextField isRequired name="address">
                    <Label>Address</Label>
                    <TextArea placeholder="Enter your full address" />
                  </TextField>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onPress={() => setIsOpen(false)}
                  className="text-orange-500 bg-orange-100"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="booking-form"
                  className="bg-orange-600 text-white font-semibold"
                >
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default BookingForm;
