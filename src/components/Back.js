import {useRouter} from "next/navigation";

export default function Back() {
  const router = useRouter()
  return (
      <div className="page-blank__back" onClick={() => router.back()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#292D32" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
  )
}