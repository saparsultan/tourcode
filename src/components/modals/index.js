"use client";
import {useEmptyModal, useInfoModal} from "@/store/zustand";
import InfoData from "@/components/modals/InfoData";
import EmptyData from "@/components/modals/EmptyData";
import "@/sass/modals.scss";

export default function ModalsAll() {
  const { isShow: isShowInfo } = useInfoModal();
  const { isShow: isShowEmpty } = useEmptyModal();

  return (
      <>
        {isShowInfo && <InfoData />}
        {isShowEmpty && <EmptyData />}
      </>
  );
}
