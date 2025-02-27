export type UnityVersion =
  | "undefined"
  | "2019.2.11"
  | "2019.2.10"
  | "2019.2.9"
  | "2019.2.8"
  | "2019.2.7"
  | "2019.2.6"
  | "2019.2.5"
  | "2019.2.4"
  | "2019.2.3"
  | "2019.2.2"
  | "2019.2.1"
  | "2019.1.14"
  | "2019.1.13"
  | "2019.1.12"
  | "2019.1.11"
  | "2019.1.10"
  | "2019.1.9"
  | "2019.1.8"
  | "2019.1.7"
  | "2019.1.6"
  | "2019.1.5"
  | "2019.1.4"
  | "2019.1.3"
  | "2019.1.2"
  | "2019.1.1"
  | "2019.1.0"
  | "2018.3.9"
  | "2018.3.8"
  | "2018.3.7"
  | "2018.3.6"
  | "2018.3.5"
  | "2018.3.4"
  | "2018.3.3"
  | "2018.3.2"
  | "2018.3.1"
  | "2018.3.0"
  | "2018.2.21"
  | "2018.2.20"
  | "2018.2.19"
  | "2018.2.18"
  | "2018.2.17"
  | "2018.2.16"
  | "2018.2.15"
  | "2018.2.14"
  | "2018.2.13"
  | "2018.2.12"
  | "2018.2.11"
  | "2018.2.10"
  | "2018.2.9"
  | "2018.2.8"
  | "2018.2.7"
  | "2018.2.6"
  | "2018.2.5"
  | "2018.2.4"
  | "2018.2.3"
  | "2018.2.2"
  | "2018.2.1"
  | "2018.2.0"
  | "2018.1.9"
  | "2018.1.8"
  | "2018.1.7"
  | "2018.1.6"
  | "2018.1.5"
  | "2018.1.4"
  | "2018.1.3"
  | "2018.1.2"
  | "2018.1.1"
  | "2018.1.0"
  | "2017.4.23"
  | "2017.4.22"
  | "2017.4.21"
  | "2017.4.20"
  | "2017.4.19"
  | "2017.4.18"
  | "2017.4.17"
  | "2017.4.16"
  | "2017.4.15"
  | "2017.4.14"
  | "2017.4.13"
  | "2017.4.12"
  | "2017.4.11"
  | "2017.4.10"
  | "2017.4.9"
  | "2017.4.8"
  | "2017.4.7"
  | "2017.4.6"
  | "2017.4.5"
  | "2017.4.4"
  | "2017.4.3"
  | "2017.4.2"
  | "2017.4.1"
  | "2017.3.1"
  | "2017.3.0"
  | "2017.2.5"
  | "2017.2.4"
  | "2017.2.3"
  | "2017.2.2"
  | "2017.2.1"
  | "2017.2.0"
  | "2017.1.5"
  | "2017.1.4"
  | "2017.1.3"
  | "2017.1.2"
  | "2017.1.1"
  | "2017.1.0"
  | "5.6.7_depricated"
  | "5.6.6_depricated"
  | "5.6.5_depricated"
  | "5.6.4_depricated"
  | "5.6.3_depricated"
  | "5.6.2_depricated"
  | "5.6.1_depricated"
  | "5.6.0_depricated"
  | "5.5.6_unsupported"
  | "5.5.5_unsupported"
  | "5.5.4_unsupported"
  | "5.5.3_unsupported"
  | "5.5.2_unsupported"
  | "5.5.1_unsupported"
  | "5.5.0_unsupported"
  | "5.4.6_unsupported"
  | "5.4.5_unsupported"
  | "5.4.4_unsupported"
  | "5.4.3_unsupported"
  | "5.4.2_unsupported"
  | "5.4.1_unsupported"
  | "5.4.0_unsupported"
  | "5.3.8_unsupported"
  | "5.3.7_unsupported"
  | "5.3.6_unsupported"
  | "5.3.5_unsupported"
  | "5.3.4_unsupported"
  | "5.3.3_unsupported"
  | "5.3.2_unsupported"
  | "5.3.1_unsupported"
  | "5.3.0_unsupported"
  | "5.2.5_unsupported"
  | "5.2.4_unsupported"
  | "5.2.3_unsupported"
  | "5.2.2_unsupported"
  | "5.2.1_unsupported"
  | "5.2.0_unsupported"
  | "5.1.5_unsupported"
  | "5.1.4_unsupported"
  | "5.1.3_unsupported"
  | "5.1.2_unsupported"
  | "5.1.1_unsupported"
  | "5.1.0_unsupported"
  | "5.0.4_unsupported"
  | "5.0.3_unsupported"
  | "5.0.2_unsupported"
  | "5.0.1_unsupported"
  | "5.0.0_unsupported"
  | "4.7.2_unsupported"
  | "4.7.1_unsupported"
  | "4.7.0_unsupported"
  | "4.6.9_unsupported"
  | "4.6.8_unsupported"
  | "4.6.7_unsupported"
  | "4.6.6_unsupported"
  | "4.6.5_unsupported"
  | "4.6.4_unsupported"
  | "4.6.3_unsupported"
  | "4.6.2_unsupported"
  | "4.6.1_unsupported"
  | "4.6.0_unsupported"
  | "4.5.5_unsupported"
  | "4.5.4_unsupported"
  | "4.5.3_unsupported"
  | "4.5.2_unsupported"
  | "4.5.1_unsupported"
  | "4.5.0_unsupported"
  | "4.3.4_unsupported"
  | "4.3.3_unsupported"
  | "4.3.2_unsupported"
  | "4.3.1_unsupported"
  | "4.3.0_unsupported"
  | "4.2.2_unsupported"
  | "4.2.1_unsupported"
  | "4.2.0_unsupported"
  | "4.1.5_unsupported"
  | "4.1.4_unsupported"
  | "4.1.3_unsupported"
  | "4.1.2_unsupported"
  | "4.1.0_unsupported"
  | "4.0.1_unsupported"
  | "4.0.0_unsupported"
  | "3.5.7_unsupported"
  | "3.5.6_unsupported"
  | "3.5.5_unsupported"
  | "3.5.4_unsupported"
  | "3.5.3_unsupported"
  | "3.5.2_unsupported"
  | "3.5.1_unsupported"
  | "3.5.0_unsupported"
  | "3.4.2_unsupported"
  | "3.4.1_unsupported"
  | "3.4.0_unsupported";
