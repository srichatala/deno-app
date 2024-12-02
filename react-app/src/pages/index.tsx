import { useEffect, useState } from "react";

export default function Index() {
  const [res, setRes] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`api/v1/`);
      const apiRes = await response.json() as any;
      setRes(apiRes);
    })();
  }, []);

  return (
    <main>
      <h1>{res.data}</h1>
    </main>
  );
}