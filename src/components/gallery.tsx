"use client";

import React, { useState } from "react";
import { X, Images } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  description: string;
}

const galleryItems: MediaItem[] = [
  {
    type: "image",
    url: "/12.png",
    description: "",
  },
  {
    type: "image",
    url: "/6.jpg",
    description: "",
  },
  {
    type: "image",
    url: "/7.png",
    description: "",
  },
  {
    type: "image",
    url: "/8.jpg",
    description: "",
  },
  {
    type: "image",
    url: "/1.jpg",
    description: "",
  },
  {
    type: "image",
    url: "/3.jpg",
    description: "",
  },
  {
    type: "image",
    url: "/4.jpg",
    description: "",
  },
  {
    type: "image",
    url: "/5.jpg",
    description: "",
  },
];

export default function GalleryPopup() {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <>
      <div className="fixed bottom-162 right-170 z-40 group">
        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-xl border border-neutral-800 text-white"
        >
          <Images className="w-6 h-6" />
        </button>
        <span className="absolute bottom-full right-0 mb-2 px-2 py-1 text-sm rounded text-white opacity-0 group-hover:opacity-100 transition">
          Galeria
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex overflow-y-auto items-center justify-center p-6"
          onClick={() => {
            setSelectedMedia(null);
            setOpen(false);
          }}
        >
          <div
            className="bg-[var(--neutral-one)] text-white rounded-2xl shadow-xl max-w-5xl w-full max-h-[80vh] overflow-auto relative p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedMedia(null);
                setOpen(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-800"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">$</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMedia(item)}
                  className="cursor-pointer bg-neutral-800/50 rounded-xl overflow-hidden hover:scale-105 transition-transform"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt={item.description}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <video
                      src={item.url}
                      className="w-full h-48 object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-4xl w-full">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : (
              <video
                src={selectedMedia.url}
                autoPlay
                controls
                className="w-full h-auto max-h-[80vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
