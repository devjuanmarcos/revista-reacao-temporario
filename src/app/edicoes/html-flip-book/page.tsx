"use client";

import HTMLFlipBook from "react-pageflip";
import React from "react";
import Image from "next/image";

const books = [
  "/temp/flip-pdf-test/ED-146_compressed_page-0001.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0002.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0003.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0004.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0005.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0006.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0007.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0008.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0009.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0010.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0011.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0012.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0013.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0014.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0015.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0016.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0017.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0018.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0019.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0020.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0021.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0022.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0023.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0024.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0025.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0026.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0027.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0028.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0029.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0030.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0031.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0032.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0033.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0034.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0035.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0036.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0037.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0038.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0039.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0040.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0041.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0042.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0043.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0044.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0045.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0046.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0047.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0048.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0049.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0050.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0051.jpg",
  "/temp/flip-pdf-test/ED-146_compressed_page-0052.jpg",
];

export default function MyBook() {
  return (
    <div className="w-screen h-screen bg-white overflow-hidden overflow-x-hidden">
      <HTMLFlipBook
        width={700}
        height={900}
        minWidth={900}
        maxWidth={700}
        className=""
        style={{ width: "100%", height: "100%" }}
        startPage={0}
        size="fixed"
        minHeight={0}
        maxHeight={900}
        drawShadow={false}
        flippingTime={1}
        usePortrait={true}
        startZIndex={900}
        autoSize={true}
        maxShadowOpacity={10}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={900}
        showPageCorners={true}
        disableFlipByClick={true}
      >
        {books.map((page) => (
          <div className="w-[900px] h-full" key={page}>
            <Image src={page} width={900} height={900} alt="" className="w-[900px] h-full" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
