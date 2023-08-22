"use client"
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useMail } from "@/hooks/useMail";

export default function ContactModal() {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [email, setEmail] = useState<string>("");
    const [where, setWhere] = useState<string>("");
    const [why, setWhy] = useState<string>("");
    const { sendMail } = useMail();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMail(email,where, why);
        onClose();
    }
    return (
        <>
            <NextLink
                className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href="#"
                onClick={onOpen}
            >
                Contact
            </NextLink>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <ModalHeader className="flex flex-col gap-1">Contact Me</ModalHeader>
                                <ModalBody>

                                    <Input
                                        id="email"
                                        label="What is your email?"
                                        placeholder=""
                                        variant="bordered"
                                        onChange={(e) => setEmail(e.target.value)}
                                        isRequired
                                    />
                                    <Input
                                        id="where"
                                        label="Where did you met me?"
                                        placeholder=""
                                        variant="bordered"
                                        onChange={(e) => setWhere(e.target.value)}
                                        isRequired
                                    />
                                    <Input
                                        id="why"
                                        label="Ask me your question"
                                        placeholder=""
                                        variant="bordered"
                                        onChange={(e) => setWhy(e.target.value)}
                                        isRequired
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit">
                                        Send
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}