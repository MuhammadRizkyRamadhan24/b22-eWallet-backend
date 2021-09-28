-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Sep 2021 pada 09.58
-- Versi server: 10.1.35-MariaDB
-- Versi PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewallet_backend`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `token_fcms`
--

CREATE TABLE `token_fcms` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `token_fcms`
--

INSERT INTO `token_fcms` (`id`, `userId`, `token`, `createdAt`, `updatedAt`) VALUES
(1, 5, 'cDJ8glrrSBSsyzj9d6Vpdk:APA91bFC666g3-mLEbwBODYhWAu4HN0i9ecfCUeUvskWfSGzCXMCBPfMWD-jVESUevakJPWkmt72JbvtgkDu5I2PkUSj7UQK-OuyjBarIYXtIuEuBOoH1mtnyLl1-EElnY1YwJBGjVHx', '2021-09-14 12:26:52', '2021-09-14 12:26:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `topups`
--

CREATE TABLE `topups` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `deductedBalance` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `topups`
--

INSERT INTO `topups` (`id`, `userId`, `deductedBalance`, `createdAt`, `updatedAt`) VALUES
(1, 5, 20000, '2021-07-18 16:01:40', '2021-07-18 16:01:40'),
(2, 5, 200000, '2021-07-18 16:15:11', '2021-07-18 16:15:11'),
(22, 5, 60000, '2021-08-06 07:51:29', '2021-08-06 07:51:29'),
(23, 14, 64646, '2021-08-06 08:22:15', '2021-08-06 08:22:15'),
(24, 14, 64646, '2021-08-06 08:22:16', '2021-08-06 08:22:16'),
(25, 14, 64646, '2021-08-06 08:22:16', '2021-08-06 08:22:16'),
(26, 14, 50000, '2021-08-06 08:22:24', '2021-08-06 08:22:24'),
(27, 5, 10000, '2021-08-06 08:52:47', '2021-08-06 08:52:47'),
(28, 5, 90000, '2021-09-09 13:44:39', '2021-09-09 13:44:39'),
(29, 5, 20000, '2021-09-09 13:45:27', '2021-09-09 13:45:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `refNo` varchar(255) DEFAULT NULL,
  `deductedBalance` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `trxFee` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `refNo`, `deductedBalance`, `description`, `trxFee`, `createdAt`, `updatedAt`) VALUES
(4, 5, 'INV/PULSA/582021/346946/0895358663696', 5000, 'Beli Pulsa', 1500, '2021-08-05 11:39:11', '2021-08-05 11:39:11'),
(5, 5, 'INV/PULSA/582021/599875/0895358663696', 10000, 'Beli Pulsa', 1500, '2021-08-05 12:05:12', '2021-08-05 12:05:12'),
(6, 5, 'INV/PULSA/582021/546297/089535266968', 50000, 'Beli Pulsa', 1500, '2021-08-05 13:43:00', '2021-08-05 13:43:00'),
(7, 5, 'INV/PULSA/682021/790327/0852256659809', 50000, 'Beli Pulsa', 1500, '2021-08-06 03:23:25', '2021-08-06 03:23:25'),
(8, 5, 'INV/PULSA/682021/41381/0895358663696', 150000, 'Beli Pulsa', 1500, '2021-08-06 06:15:38', '2021-08-06 06:15:38'),
(9, 13, 'INV/PULSA/682021/503576/089123456789', 10000, 'Beli Pulsa', 1500, '2021-08-06 06:40:37', '2021-08-06 06:40:37'),
(10, 5, 'INV/PULSA/682021/861123/0895358663696', 5000, 'Beli Pulsa', 1500, '2021-08-06 07:35:10', '2021-08-06 07:35:10'),
(11, 5, 'INV/PULSA/682021/739120/087321456987', 50000, 'Beli Pulsa', 1500, '2021-08-06 07:38:08', '2021-08-06 07:38:08'),
(12, 5, 'INV/PULSA/682021/489975/081227731209', 5000, 'Beli Pulsa', 1500, '2021-08-06 07:41:06', '2021-08-06 07:41:06'),
(13, 5, 'INV/PULSA/682021/67271/081227731209', 5000, 'Beli Pulsa', 1500, '2021-08-06 07:41:30', '2021-08-06 07:41:30'),
(14, 5, 'INV/PULSA/682021/35422/0879654321594', 10000, 'Beli Pulsa', 1500, '2021-08-06 07:42:02', '2021-08-06 07:42:02'),
(15, 14, 'INV/PULSA/682021/340789/087987654321', 10000, 'Beli Pulsa', 1500, '2021-08-06 08:23:22', '2021-08-06 08:23:22'),
(16, 5, 'INV/PULSA/682021/411145/0895358663696', 10000, 'Beli Pulsa', 1500, '2021-08-06 08:53:11', '2021-08-06 08:53:11'),
(17, 5, 'INV/PULSA/992021/474009/087536987584', 5000, 'Beli Pulsa', 1500, '2021-09-09 14:00:05', '2021-09-09 14:00:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transfers`
--

CREATE TABLE `transfers` (
  `id` int(11) NOT NULL,
  `userIdSender` int(11) DEFAULT NULL,
  `userIdReceiver` int(11) DEFAULT NULL,
  `deductedBalance` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `trxFee` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transfers`
--

INSERT INTO `transfers` (`id`, `userIdSender`, `userIdReceiver`, `deductedBalance`, `description`, `trxFee`, `createdAt`, `updatedAt`) VALUES
(1, 6, 5, 50000, 'buat beli kaos band', 0, '2021-07-20 15:32:52', '2021-07-20 15:32:52'),
(2, 6, 5, 50000, 'buat beli kaos band', 0, '2021-07-20 15:32:54', '2021-07-20 15:32:54'),
(3, 6, 5, 50000, 'buat beli kaos band', 0, '2021-07-20 15:32:57', '2021-07-20 15:32:57'),
(4, 6, 5, 50000, 'buat beli kaos band', 0, '2021-07-20 15:33:02', '2021-07-20 15:33:02'),
(5, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 15:33:33', '2021-07-20 15:33:33'),
(6, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 15:33:35', '2021-07-20 15:33:35'),
(7, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 15:33:36', '2021-07-20 15:33:36'),
(8, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 15:33:36', '2021-07-20 15:33:36'),
(9, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 15:52:15', '2021-07-20 15:52:15'),
(10, 5, 6, 400000, 'buat beli kaos band', 0, '2021-07-20 15:52:57', '2021-07-20 15:52:57'),
(11, 5, 6, 100000, 'buat beli kaos band', 0, '2021-07-20 15:53:02', '2021-07-20 15:53:02'),
(12, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 15:53:06', '2021-07-20 15:53:06'),
(13, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 16:06:23', '2021-07-20 16:06:23'),
(14, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 16:06:24', '2021-07-20 16:06:24'),
(15, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 16:06:25', '2021-07-20 16:06:25'),
(16, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 16:06:28', '2021-07-20 16:06:28'),
(17, 5, 6, 500000, 'buat beli kaos band', 0, '2021-07-20 16:06:29', '2021-07-20 16:06:29'),
(18, 5, 6, 12000, 'Coba', 0, '2021-07-20 16:23:10', '2021-07-20 16:23:10'),
(19, 5, 3, 120000, '', 0, '2021-07-20 16:24:08', '2021-07-20 16:24:08'),
(20, 5, 6, 70000, '', 0, '2021-07-20 16:24:31', '2021-07-20 16:24:31'),
(21, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:27:59', '2021-07-20 16:27:59'),
(22, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:38:58', '2021-07-20 16:38:58'),
(23, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:39:21', '2021-07-20 16:39:21'),
(24, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:39:48', '2021-07-20 16:39:48'),
(25, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:40:28', '2021-07-20 16:40:28'),
(26, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:49:31', '2021-07-20 16:49:31'),
(27, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-20 16:51:12', '2021-07-20 16:51:12'),
(28, 9, 5, 45000, 'Beli cupang', 0, '2021-07-21 01:06:25', '2021-07-21 01:06:25'),
(29, 6, 9, 500000, 'buat beli kaos band', 0, '2021-07-21 01:10:55', '2021-07-21 01:10:55'),
(30, 9, 6, 10000, 'Kondangan', 0, '2021-07-21 01:23:41', '2021-07-21 01:23:41'),
(31, 6, 9, 500000, 'buat beli kaos band', 0, '2021-07-21 01:47:52', '2021-07-21 01:47:52'),
(32, 9, 5, 290000, 'Apa', 0, '2021-07-21 02:19:56', '2021-07-21 02:19:56'),
(33, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-21 07:14:46', '2021-07-21 07:14:46'),
(34, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-21 07:16:46', '2021-07-21 07:16:46'),
(35, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-21 07:36:01', '2021-07-21 07:36:01'),
(36, 6, 5, 500000, 'buat beli kaos band', 0, '2021-07-21 07:36:08', '2021-07-21 07:36:08'),
(37, 5, 6, 489000, 'Point', 0, '2021-07-21 07:50:00', '2021-07-21 07:50:00'),
(38, 5, 9, 1000000, 'Beli Baju', 0, '2021-07-21 07:50:47', '2021-07-21 07:50:47'),
(39, 6, 5, 1000000, 'buat beli kaos band', 0, '2021-07-21 07:55:24', '2021-07-21 07:55:24'),
(40, 6, 5, 1000000, 'buat beli kaos band', 0, '2021-07-21 10:27:31', '2021-07-21 10:27:31'),
(41, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-05 11:47:09', '2021-08-05 11:47:09'),
(42, 5, 6, 20000, 'P', 0, '2021-08-05 12:45:38', '2021-08-05 12:45:38'),
(43, 5, 6, 10000, 'P', 0, '2021-08-05 13:17:36', '2021-08-05 13:17:36'),
(44, 5, 6, 10000, 'P', 0, '2021-08-05 13:18:37', '2021-08-05 13:18:37'),
(45, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-05 13:47:22', '2021-08-05 13:47:22'),
(46, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-05 13:47:50', '2021-08-05 13:47:50'),
(47, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-05 13:47:57', '2021-08-05 13:47:57'),
(48, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-05 13:49:13', '2021-08-05 13:49:13'),
(49, 5, 6, 10000, '', 0, '2021-08-06 03:20:42', '2021-08-06 03:20:42'),
(50, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-06 03:31:21', '2021-08-06 03:31:21'),
(52, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-06 03:46:37', '2021-08-06 03:46:37'),
(54, 5, 6, 20000, 'Buat jajan anak', 0, '2021-08-06 06:14:57', '2021-08-06 06:14:57'),
(55, 6, 5, 50500, 'buat beli kaos band', 0, '2021-08-06 06:17:37', '2021-08-06 06:17:37'),
(56, 5, 6, 36000, 'Thr', 0, '2021-08-06 06:26:24', '2021-08-06 06:26:24'),
(57, 13, 6, 50000, 'Jajan', 0, '2021-08-06 06:29:07', '2021-08-06 06:29:07'),
(58, 14, 5, 100000, 'Jajan', 0, '2021-08-06 08:23:00', '2021-08-06 08:23:00'),
(59, 5, 14, 50500, 'buat beli kaos band', 0, '2021-08-06 08:24:26', '2021-08-06 08:24:26'),
(60, 5, 6, 30000, 'Jajan', 0, '2021-09-09 13:49:35', '2021-09-09 13:49:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `balance` int(11) DEFAULT '0',
  `name` varchar(255) DEFAULT '',
  `phone_number` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `balance`, `name`, `phone_number`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'user@gmail.com', '57176100', 980000, 'Zidan', '089877672892', '', '2021-07-18 07:14:55', '2021-07-18 09:11:03'),
(3, 'user2@gmail.com', '12345678', 779000, 'user2', '081227731209', '', '2021-07-18 07:29:51', '2021-07-20 16:24:08'),
(4, 'user3@gmail.com', '12345678', 500000, 'user3', '089877672892', '', '2021-07-18 07:30:01', '2021-07-18 07:30:01'),
(5, 'zidan.muh88@gmail.com', '$2b$10$VPAqaLPUkrRpcmhdDGZi..OpyuLv6CglTKI9eI05pCjs62rFMZ1oS', 61362000, 'User Example', '0895358663696', 'image-1631195641612.jpg', '2021-07-18 13:46:31', '2021-09-14 12:47:10'),
(6, 'zidan.muh69@gmail.com', '$2b$10$zbJyAxujGOfi/U.C6lv95euvfNS42rGSWdro.Ea92sInzzo91spT6', 12678500, 'Zidannn', '089535866369', 'image-1626783037723.jpg', '2021-07-18 13:46:51', '2021-09-09 13:49:35'),
(8, 'zidan@gmail.com', '$2b$10$EtghSI9yuLVEx9.KStr2.uXNN510Xq/r7ny8VCFSwLpAr6X3FlluC', 0, NULL, '08123456789', NULL, '2021-07-21 00:58:53', '2021-07-21 00:58:53'),
(9, 'yearbookpanitia@gmail.com', '$2b$10$WJ5Qn4M1rhLGBL76h/4Ou.JBeDIK4q/wlG/vSLwU4rbplbIwQVJNu', 2000000, 'Muhammad', '08147258369', 'image-1626829552176.jpg', '2021-07-21 01:04:40', '2021-07-21 07:50:47'),
(13, 'pani@gmail.com', '$2b$10$.ogJVZYnTcKt6PbKWwSo5uV1d6Kse6clXXdwNnW.JPpHX71CkvLUW', 138500, 'Pani', '089123456789', 'image-1628231315616.jpg', '2021-08-06 06:27:06', '2021-08-06 06:40:37'),
(14, '3103117328@student.smktelkom-pwt.sch.id', '$2b$10$WsOJCMUxU/MGSPQo8dqts.j2Er5UO6FXHpCl7nQifnyA/RkPiDKXW', 182938, 'Zidan Muhammad', '087987654321', 'image-1628238117481.jpg', '2021-08-06 08:20:29', '2021-09-10 07:12:38');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `token_fcms`
--
ALTER TABLE `token_fcms`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `topups`
--
ALTER TABLE `topups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userIdSender` (`userIdSender`),
  ADD KEY `userIdReceiver` (`userIdReceiver`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `token_fcms`
--
ALTER TABLE `token_fcms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `topups`
--
ALTER TABLE `topups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `topups`
--
ALTER TABLE `topups`
  ADD CONSTRAINT `topups_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transfers`
--
ALTER TABLE `transfers`
  ADD CONSTRAINT `transfers_ibfk_1` FOREIGN KEY (`userIdSender`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `transfers_ibfk_2` FOREIGN KEY (`userIdReceiver`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
