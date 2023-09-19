import { Modal } from "@/components/modal";
import { ModalBody } from "@/components/ui/modalBody";
import { ModalContent } from "@/components/ui/modalContent";
import { ModalFooter } from "@/components/ui/modalFooter";
import { ModalHeader } from "@/components/ui/modalHeader";

export default function Home() {
  return (
    <main className="main">
      <Modal>
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quasi in. Temporibus ducimus illo laudantium.
          </ModalBody>
          <ModalFooter>Modal Footer</ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
