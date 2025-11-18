import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser } = get();
        try {
            const res = await axiosInstance.post(
                `/messages/send/${selectedUser._id}`,
                messageData
            );

            // add my message instantly
            set(state => ({
                messages: [...state.messages, res.data]
            }));
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    },

    setSelectedUser: (user) => {
        const socket = useAuthStore.getState().socket;

        // Unsubscribe from events for old chat
        socket?.off("newMessage");

        set({ selectedUser: user });

        // Subscribe to new chat
        get().subscribeToMessages();
    },

    subscribeToMessages: () => {
        const socket = useAuthStore.getState().socket;
        const { selectedUser } = get();
        if (!selectedUser || !socket) return;

        socket.on("newMessage", (newMessage) => {
            const isForSelectedUser =
                newMessage.senderId === selectedUser._id ||
                newMessage.receiverId === selectedUser._id;

            if (!isForSelectedUser) return;

            // Append safely
            set(state => ({
                messages: [...state.messages, newMessage]
            }));
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket?.off("newMessage");
    },
}));
