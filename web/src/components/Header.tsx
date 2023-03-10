import { useState } from "react";
import { Plus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../assets/logo.svg";
import NewHabitForm from "./NewHabitForm";

function Header({ setUpdate }: any) {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logo} alt="Habits" />

      <Dialog.Root
        onOpenChange={() => {
          setIsClosed(!isClosed);
          if (isClosed) {
            setUpdate(true);
          }
        }}
      >
        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 ease-out duration-200"
        >
          New Habit
          <Plus size={20} className="text-violet-500" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Create Habit
            </Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default Header;
