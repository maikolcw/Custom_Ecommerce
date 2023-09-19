"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

// helper to use StoreModal everywhere, circumvent hydration errors with client and server
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // if on server side
    if (!isMounted) {
        return null;
    }

    // else on client side
    return (
        <>
            <StoreModal />
        </>
    );
}