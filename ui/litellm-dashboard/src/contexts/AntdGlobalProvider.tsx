"use client";

import React, { useEffect, useRef } from "react";
import { notification, message, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { setNotificationInstance } from "@/components/molecules/notifications_manager";
import { setMessageInstance } from "@/components/molecules/message_manager";
import dayjs from "dayjs";
import moment from "moment";
import "moment/locale/zh-cn";

dayjs.locale("zh-cn");
moment.locale("zh-cn");

export default function AntdGlobalProvider({ children }: { children: React.ReactNode }) {
  const [notificationApi, notificationContextHolder] = notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      setNotificationInstance(notificationApi);
      setMessageInstance(messageApi);
      initialized.current = true;
    }
  }, [notificationApi, messageApi]);

  return (
    <ConfigProvider locale={zhCN}>
      {notificationContextHolder}
      {messageContextHolder}
      {children}
    </ConfigProvider>
  );
}
