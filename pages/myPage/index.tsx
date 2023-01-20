import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function myPage() {
  useAuth();

  return (
    <>
      <div>마이페이지입니다</div>
    </>
  );
}
