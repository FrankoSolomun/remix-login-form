import { useMatches } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { PencilIcon } from "~/icons/icons";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { LoaderData } from "~/routes/_index";

interface Env {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_UPLOAD_PRESET: string;
}

interface CloudinaryWidget {
  open: () => void;
}

function UploadWidget() {
  const fetcher = useFetcher();
  const userId = useLoaderData<LoaderData>().user.id;
  const matches = useMatches();
  const envData = matches.find((route) => route.id === "root")?.data || {};
  const { ENV }: { ENV: Env } = (envData as { ENV: Env }) || {
    ENV: { CLOUDINARY_CLOUD_NAME: "", CLOUDINARY_UPLOAD_PRESET: "" },
  };

  function createWidget() {
    if ("cloudinary" in window) {
      return (window as any).cloudinary.createUploadWidget(
        {
          cloudName: ENV.CLOUDINARY_CLOUD_NAME,
          uploadPreset: ENV.CLOUDINARY_UPLOAD_PRESET,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            fetcher.submit(
              {
                userId,
                profilePictureUrl: result.info.secure_url,
                action: "uploadProfilePicture",
              },
              { method: "post" },
            );
          }
        },
      );
    }
  }

  const widget = useRef<CloudinaryWidget | null>(null);

  useEffect(() => {
    function onIdle() {
      if (!widget.current) {
        widget.current = createWidget();
      }
    }

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 0);
    }
  }, []);

  function open() {
    if (widget.current) {
      widget.current.open();
    }
  }

  return (
    <button
      onClick={open}
      className="absolute bg-white p-2 rounded-full right-0 -bottom-2 border border-gray-300"
    >
      <PencilIcon className="w-4 h-4 stroke-white" />
    </button>
  );
}

export default UploadWidget;
