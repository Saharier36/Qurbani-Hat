"use client";
import { Button, Modal, TextField, Label, Input } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful!");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        className="w-full bg-orange-600 text-white font-semibold py-6 rounded-full text-lg hover:bg-orange-700"
      >
        Book This Animal
      </Button>

      <Modal state={{ isOpen, onOpenChange: setIsOpen }}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Heading>Book Your Qurbani Animal</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <form
                  id="booking-form"
                  onSubmit={handleBooking}
                  className="flex flex-col gap-4"
                >
                  <TextField isRequired>
                    <Label>Full Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField isRequired>
                    <Label>Phone Number</Label>
                    <Input placeholder="+880 1XXX-XXXXXX" type="tel" />
                  </TextField>

                  <TextField>
                    <Label>Email</Label>
                    <Input placeholder="you@example.com" type="email" />
                  </TextField>

                  <TextField>
                    <Label>Address</Label>
                    <Input placeholder="Enter your full address" type="text" />
                  </TextField>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onPress={() => setIsOpen(false)}
                  className="text-orange-500"
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
    </>
  );
};

export default BookingForm;
