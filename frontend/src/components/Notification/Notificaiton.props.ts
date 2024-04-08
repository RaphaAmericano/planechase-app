export interface NotificationProps {
    message: string;
    type?: "alert" | "info" | "success" | "warning" | "error"
}