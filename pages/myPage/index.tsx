import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function myPage() {
  useAuth();
  const router = useRouter();
  useEffect(() => {
    router.push("/myPage/boughtPage");
  }, []);

  return <></>;
}
