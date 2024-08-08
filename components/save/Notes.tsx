"use client";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [data, setData] = useState<string[]>([]);
    //   localStorage.clear();
  useEffect(() => {
    const existingDataString = localStorage.getItem("myData");
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5">
      {data.map((item: any, idx: number) => (
        <div key={idx} className="text-white my-4 p-4 border rounded shadow">
          <div className="font-bold">Note - {idx + 1}</div>
          <div
            className="ProseMirror whitespace-pre-line"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      ))}
    </div>
  );
};

export default Notes;
