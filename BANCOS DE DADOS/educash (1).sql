--
-- Banco de dados: `educash`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cofrinho_deposits`
--

DROP TABLE IF EXISTS `cofrinho_deposits`;
CREATE TABLE IF NOT EXISTS `cofrinho_deposits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cofrinho_id` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cofrinho_id` (`cofrinho_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `planilha_despesas`
--

DROP TABLE IF EXISTS `planilha_despesas`;
CREATE TABLE IF NOT EXISTS `planilha_despesas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planilha_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `planilha_id` (`planilha_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `account_type` enum('self','child') NOT NULL DEFAULT 'self',
  `birthdate` date NOT NULL,
  `age` int NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `profile` enum('kids','teen','adult') NOT NULL DEFAULT 'adult',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `account_type`, `birthdate`, `age`, `profile_picture`, `profile`, `created_at`) VALUES
(1, 'leandrinha', 'jeipi7007@gmail.com', '$2y$10$Ss58R9MTPR8ww/Wr99vA7uOy4wsB4BFqTLTxElTTxDYcM/tqdvRy.', 'self', '2018-12-08', 6, '/educa10nov/uploads/profiles/profile_1_1764474598.jpg', 'kids', '2025-11-30 03:28:12'),
(2, 'asd', 'fernandorochasuper078@hotmail.com', '$2y$10$sz0S4/oVnAtJaVJjo1cahOD1AgbNwfmumMdc79CbAAcl3KYns0U5q', 'self', '2018-12-08', 6, '/educa10nov/uploads/profiles/profile_2_1764474897.jpg', 'kids', '2025-11-30 03:50:29'),
(3, 'lavinia', 'lavinia@gmail.com', '$2y$10$RezNk1WN85ig2u9MxcDcS.OSNWyd7ZJ3IY22gppiwHRDlb1M/xUqq', 'self', '2018-12-08', 6, '/educa10nov/uploads/profiles/profile_3_1764475203.jpg', 'kids', '2025-11-30 03:59:35'),
(4, 'asdf', 'paulodaniel0922@gmail.com', '$2y$10$FyW8mx1BauNONWYBuRMC0ugR8RjWMiIIY1HkfX9anQD1FNM5ok3LK', 'self', '2018-12-08', 6, '../images/perfilla.PNG', 'kids', '2025-11-30 04:09:13'),
(5, 'neguin', '123@gmail.com', '$2y$10$GIzyXG4DkHaW88ghp9wb8OsLTwQ7c92RBB0RALKHehlaLHA6EXSz2', 'self', '2018-12-08', 6, '/educa10nov/uploads/profiles/profile_5_1764478274.jpg', 'kids', '2025-11-30 04:17:00'),
(6, 'JAEGERPSYCHO', 'kungss1020@gmail.com', '$2y$10$DX8eQCOpslK9M0cIy6kJXOZvJornzNeK3HM7ZofU7tYhdvaNK8Ox6', 'self', '2018-12-08', 6, '/educa10nov/uploads/profiles/profile_6_1764515668.jpg', 'kids', '2025-11-30 15:12:55'),
(7, '0823', '1232@gmail.com', '$2y$10$ofClbgcTTTIwlMcysQzeEu5ShDJsDUsCWVm1e.88hkjphX7RMA7Je', 'self', '2002-01-08', 23, '../images/perfilla.PNG', 'adult', '2025-11-30 15:13:24'),
(8, 'asdffff', 'ffff@gmail.com', '$2y$10$zTqtL/RBYytcR1KNn1WViu50OLsLA2zbcDa.3mlDpipdApVRpedty', 'self', '2010-12-08', 14, '../images/perfilla.PNG', 'teen', '2025-11-30 15:15:44');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_activities`
--

DROP TABLE IF EXISTS `user_activities`;
CREATE TABLE IF NOT EXISTS `user_activities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `module_id` int NOT NULL,
  `activity_id` int NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_cofrinhos`
--

DROP TABLE IF EXISTS `user_cofrinhos`;
CREATE TABLE IF NOT EXISTS `user_cofrinhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `icon` varchar(50) DEFAULT 'piggy-bank',
  `color` varchar(7) DEFAULT '#5EC57E',
  `goal` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `user_cofrinhos`
--

INSERT INTO `user_cofrinhos` (`id`, `user_id`, `name`, `icon`, `color`, `goal`, `created_at`) VALUES
(1, 7, 'penis de borracha', 'gamepad', '#5EC57E', 50.00, '2025-11-30 15:13:47');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_module_progress`
--

DROP TABLE IF EXISTS `user_module_progress`;
CREATE TABLE IF NOT EXISTS `user_module_progress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `module_id` int NOT NULL,
  `progress_data` json NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_module` (`user_id`,`module_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `user_module_progress`
--

INSERT INTO `user_module_progress` (`id`, `user_id`, `module_id`, `progress_data`, `completed`, `last_updated`) VALUES
(1, 1, 1, '{\"lastSaved\": \"2025-11-30T03:50:05.517Z\", \"currentPage\": 2, \"currentActivity\": 4, \"completedActivities\": [3, 5, 1, 2, 4]}', 1, '2025-11-30 03:50:05'),
(2, 2, 1, '{\"lastSaved\": \"2025-11-30T03:59:20.250Z\", \"currentPage\": 2, \"currentActivity\": 4, \"completedActivities\": [3, 5, 1, 2, 4]}', 1, '2025-11-30 03:59:20'),
(3, 4, 1, '{\"lastSaved\": \"2025-11-30T04:15:39.350Z\", \"currentPage\": 0, \"currentActivity\": 5, \"totalActivities\": 5, \"completedActivities\": [1, 2, 3, 4, 5], \"completedPercentage\": 100}', 1, '2025-11-30 04:15:39'),
(4, 5, 1, '{\"lastSaved\": \"2025-11-30T04:18:33.955Z\", \"currentPage\": 0, \"currentActivity\": 5, \"totalActivities\": 5, \"completedActivities\": [1, 2, 3, 4, 5], \"completedPercentage\": 100}', 1, '2025-11-30 04:18:33'),
(5, 5, 2, '{\"lastSaved\": \"2025-11-30T05:03:58.819Z\", \"currentPage\": 0, \"currentActivity\": 5, \"totalActivities\": 5, \"completedActivities\": [1, 2, 3, 4, 5], \"completedPercentage\": 100}', 1, '2025-11-30 05:03:58'),
(6, 5, 3, '{\"lastSaved\": \"2025-11-30T05:17:11.314Z\", \"currentPage\": 0, \"currentActivity\": 5, \"totalActivities\": 5, \"completedActivities\": [1, 2, 3, 4, 5], \"completedPercentage\": 100}', 1, '2025-11-30 05:17:11'),
(7, 2, 3, '{\"lastSaved\": \"2025-11-30T19:42:53.739Z\", \"currentPage\": 0, \"currentActivity\": 5, \"totalActivities\": 5, \"completedActivities\": [5], \"completedPercentage\": 20}', 0, '2025-11-30 19:42:53');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_planilhas`
--

DROP TABLE IF EXISTS `user_planilhas`;
CREATE TABLE IF NOT EXISTS `user_planilhas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `monthly_income` decimal(10,2) NOT NULL,
  `extra_income` decimal(10,2) DEFAULT '0.00',
  `color` varchar(7) DEFAULT '#5EC57E',
  `icon` varchar(50) DEFAULT 'fa-chart-pie',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `user_planilhas`
--

INSERT INTO `user_planilhas` (`id`, `user_id`, `name`, `monthly_income`, `extra_income`, `color`, `icon`, `created_at`) VALUES
(1, 7, 'asd', 1200.00, 1200.00, '#5EC57E', 'fa-chart-pie', '2025-11-30 15:13:39');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
