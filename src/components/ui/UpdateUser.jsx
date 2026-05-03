import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineManageAccounts } from "react-icons/md";

const UpdateUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { name, image } = data;
    await authClient.updateUser({
      image: image,
      name: name,
    });

    toast.success("Profile updated successfully!");
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onPress={() => setIsOpen(true)}
        className="bg-emerald-700 hover:bg-emerald-800 rounded-xl"
      >
        <MdOutlineManageAccounts size={14} />
        Update your Profile
      </Button>

      <Modal state={{ isOpen, setIsOpen }}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="bg-[#F7F1E1]">
              <Modal.Header>
                <Modal.Heading>Edit Profile Info</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <form
                  id="booking-form"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
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
                    name="image"
                    type="url"
                    validate={(value) => {
                      if (value && !/^https?:\/\/.+/.test(value)) {
                        return "Please enter a valid URL";
                      }
                      return null;
                    }}
                  >
                    <Label>Photo URL</Label>
                    <Input placeholder="https://example.com/photo.jpg" />
                    <FieldError />
                  </TextField>
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
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateUser;
