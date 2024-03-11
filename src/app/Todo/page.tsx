import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is todo Page</h1>
      <Link href={"/SignIn"}>Sign Out</Link>
    </div>
  );
};

export default page;
