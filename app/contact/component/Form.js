"use client";

// react
import { useRef, useState } from "react";

// third party
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

// component
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// zod schema
const schema = z.object({
  name: z.string().min(2, {
    message: "Nama harus diisi",
  }),
  email: z.string().email({
    message: "Email harus valid",
  }),
  message: z
    .string()
    .min(2, {
      message: "Pesan harus diisi",
    })
    .max(160, {
      message: "Pesan tidak boleh lebih dari 160 karakter",
    }),
});

export default function FormContact() {
  const form = useRef();
  const { toast } = useToast();

  const [error, setError] = useState("");

  function validationMessage(value) {
    if (error) {
      const find = error.data.find((el) => el.path[0] === value);
      return find?.message;
    }
  }

  async function create(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      schema.parse({
        name,
        email,
        message,
      });

      const send = await emailjs.sendForm(
        "service_8fqh2rq",
        "template_nldze9v",
        form.current,
        "vlYGRCPdnexSkmDKx"
      );

      console.log(send.text);
      form.current.reset();

      toast({
        description: "Pesan berhasil dikirim!",
      });
    } catch (error) {
      // error jika validasi zod gagal
      if (error.name === "ZodError") {
        setError({
          name: error.name,
          data: error.errors,
        });
      }
    }
  }

  return (
    <>
      <form
        ref={form}
        onSubmit={create}
        className="flex flex-col justify-start gap-5"
      >
        <div className="grid gap-3 text-left">
          <Label htmlFor="name">Nama</Label>
          <Input
            className="focus-visible:ring-[#C79A5F]"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tuliskan nama lengkap"
          />

          {/* error */}
          {error && (
            <p className="text-xs text-red-500">{validationMessage("name")}</p>
          )}
        </div>

        <div className="grid gap-3 text-left">
          <Label htmlFor="email">Email</Label>
          <Input
            className="focus-visible:ring-[#C79A5F]"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Tuliskan email"
          />

          {/* error */}
          {error && (
            <p className="text-xs text-red-500">{validationMessage("email")}</p>
          )}
        </div>

        <div className="mb-5 grid gap-3 text-left">
          <Label htmlFor="message">Pesan</Label>
          <Textarea
            id="message"
            name="message"
            className="focus-visible:ring-[#C79A5F]"
            placeholder="Tuliskan pesan yang ingin disampaikan"
          />

          {/* error */}
          {error && (
            <p className="text-xs text-red-500">
              {validationMessage("message")}
            </p>
          )}
        </div>

        <SubmitButton />
      </form>
    </>
  );
}

function SubmitButton() {
  return (
    <Button type="submit" className="bg-[#C79A5F] hover:bg-[#b4884f]">
      Kirim Pesan
    </Button>
  );
}
