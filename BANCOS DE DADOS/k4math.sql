--
-- Banco de dados: `k4math`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `achievements`
--

DROP TABLE IF EXISTS `achievements`;
CREATE TABLE IF NOT EXISTS `achievements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_general_ci DEFAULT '#FFD670',
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `requirement` int NOT NULL,
  `xp_reward` int DEFAULT '100',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `achievements`
--

INSERT INTO `achievements` (`id`, `name`, `description`, `icon`, `color`, `type`, `requirement`, `xp_reward`, `created_at`) VALUES
(1, 'Primeiros Passos', 'Complete sua primeira atividade', '🎯', '#FF70A6', 'progresso', 1, 50, '2025-10-12 15:18:00'),
(2, 'Estudante Dedicado', 'Complete 10 atividades', '📚', '#70D6FF', 'progresso', 10, 150, '2025-10-12 15:18:00'),
(3, 'Mestre dos Estudos', 'Complete 25 atividades', '🏆', '#FFD670', 'progresso', 25, 500, '2025-10-12 15:18:00'),
(4, 'Maratonista', 'Passe 1 hora total estudando', '⏰', '#9CEC5B', 'progresso', 3600, 200, '2025-10-12 15:18:00'),
(5, 'Completista do 1º Ano', 'Complete todas as atividades do 1º ano', '⭐', '#E0A3FF', 'progresso', 5, 300, '2025-10-12 15:18:00'),
(6, 'Completista do 2º Ano', 'Complete todas as atividades do 2º ano', '🌟', '#FF70A6', 'progresso', 6, 350, '2025-10-12 15:18:00'),
(7, 'Completista do 3º Ano', 'Complete todas as atividades do 3º ano', '💫', '#70D6FF', 'progresso', 6, 400, '2025-10-12 15:18:00'),
(8, 'Completista do 4º Ano', 'Complete todas as atividades do 4º ano', '✨', '#FFD670', 'progresso', 6, 450, '2025-10-12 15:18:00'),
(9, 'Completista do 5º Ano', 'Complete todas as atividades do 5º ano', '👑', '#9CEC5B', 'progresso', 6, 500, '2025-10-12 15:18:00'),
(10, 'Perfeição', 'Acerte todas as questões de uma atividade', '⭐', '#E0A3FF', 'desempenho', 1, 300, '2025-10-12 15:18:00'),
(11, 'Precisão 90%', 'Mantenha 90% de acertos em uma atividade', '🎯', '#FF70A6', 'desempenho', 90, 250, '2025-10-12 15:18:00'),
(12, 'Velocidade', 'Complete uma atividade em menos de 2 minutos', '⚡', '#70D6FF', 'desempenho', 120, 200, '2025-10-12 15:18:00'),
(13, 'Mestre da Geometria', 'Acerte 95% nas atividades de geometria', '🔺', '#FFD670', 'desempenho', 95, 400, '2025-10-12 15:18:00'),
(14, 'Gênio dos Números', 'Acerte 95% nas atividades de números', '🔢', '#9CEC5B', 'desempenho', 95, 400, '2025-10-12 15:18:00'),
(15, 'Explorador', 'Complete atividades em 3 anos diferentes', '🧭', '#E0A3FF', 'variedade', 3, 200, '2025-10-12 15:18:00'),
(16, 'Generalista', 'Complete atividades em 5 categorias diferentes', '🌈', '#FF70A6', 'variedade', 5, 400, '2025-10-12 15:18:00'),
(17, 'Matemático Completo', 'Complete atividades em todos os anos', '👑', '#70D6FF', 'variedade', 5, 1000, '2025-10-12 15:18:00'),
(18, 'Aventureiro', 'Complete uma atividade de cada categoria', '🏔️', '#FFD670', 'variedade', 6, 600, '2025-10-12 15:18:00'),
(19, 'Noite em Claro', 'Estude após às 20h', '🌙', '#5D5D81', 'especial', 1, 150, '2025-10-12 15:18:00'),
(20, 'Fim de Semana Produtivo', 'Complete atividades no sábado ou domingo', '🎉', '#9CEC5B', 'especial', 1, 180, '2025-10-12 15:18:00'),
(21, 'Persistente', 'Tente uma atividade 3 vezes', '💪', '#E0A3FF', 'especial', 3, 220, '2025-10-12 15:18:00'),
(22, 'Estudante Matutino', 'Estude entre 6h e 12h', '🌅', '#FF70A6', 'especial', 1, 160, '2025-10-12 15:18:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE IF NOT EXISTS `activities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `file_path` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `section` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'SEÇÃO 1',
  `unit` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `difficulty_level` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `activities`
--

INSERT INTO `activities` (`id`, `title`, `description`, `file_path`, `category`, `section`, `unit`, `difficulty_level`, `created_at`) VALUES
(1, 'Contar', 'Aprenda a contar números', 'NIVEIS/1/contar.php', 'Números', 'SEÇÃO 1', 'UNIDADE 1', 1, '2025-10-12 15:18:00'),
(2, 'Figuras', 'Conheça formas geométricas básicas', 'NIVEIS/1/figuras.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 1', 1, '2025-10-12 15:18:00'),
(3, 'Medidas', 'Introdução às medidas', 'NIVEIS/1/medidas.php', 'Medidas', 'SEÇÃO 1', 'UNIDADE 1', 1, '2025-10-12 15:18:00'),
(4, 'Números', 'Reconhecimento de números', 'NIVEIS/1/numeros.php', 'Números', 'SEÇÃO 1', 'UNIDADE 1', 1, '2025-10-12 15:18:00'),
(5, 'Ordem', 'Sequências e ordenação', 'NIVEIS/1/ordem.php', 'Lógica', 'SEÇÃO 1', 'UNIDADE 1', 1, '2025-10-12 15:18:00'),
(6, 'Contagem', 'Contagem avançada', 'NIVEIS/2/contagem.php', 'Números', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(7, 'Espaço', 'Noções de espaço e localização', 'NIVEIS/2/espaco.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(8, 'Formas Geométricas', 'Formas geométricas planas', 'NIVEIS/2/formas geométricas.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(9, 'Jogos', 'Matemática através de jogos', 'NIVEIS/2/jogos.php', 'Lógica', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(10, 'Multiplicação e Divisão', 'Operações básicas', 'NIVEIS/2/multiplicacao e divisao.php', 'Operações', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(11, 'Números', 'Sistema numérico', 'NIVEIS/2/numeros.php', 'Números', 'SEÇÃO 1', 'UNIDADE 2', 1, '2025-10-12 15:18:00'),
(12, 'Divisão e Multiplicação', 'Operações combinadas', 'NIVEIS/3/divisao e multiplicacao.php', 'Operações', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(13, 'Figuras e Formas', 'Propriedades das figuras', 'NIVEIS/3/figuras e formas.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(14, 'Gráficos e Tabelas', 'Interpretação de dados', 'NIVEIS/3/graficos e tabelas.php', 'Estatística', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(15, 'Medidas', 'Sistema métrico', 'NIVEIS/3/medidas.php', 'Medidas', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(16, 'Multiplicação', 'Tabuadas e cálculos', 'NIVEIS/3/multiplicação.php', 'Operações', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(17, 'Tempo', 'Medidas de tempo', 'NIVEIS/3/tempo.php', 'Medidas', 'SEÇÃO 1', 'UNIDADE 3', 1, '2025-10-12 15:18:00'),
(18, 'Ângulos', 'Tipos e medidas de ângulos', 'NIVEIS/4/angulos.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(19, 'Medições', 'Sistema métrico decimal', 'NIVEIS/4/medicoes.php', 'Medidas', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(20, 'Numeração', 'Sistema de numeração', 'NIVEIS/4/numeracao.php', 'Números', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(21, 'Números Grandes', 'Números acima de 1000', 'NIVEIS/4/numeros.php', 'Números', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(22, 'Planificação', 'Figuras tridimensionais', 'NIVEIS/4/planificacao.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(23, 'Problemas', 'Resolução de problemas', 'NIVEIS/4/problemas.php', 'Problemas', 'SEÇÃO 1', 'UNIDADE 4', 1, '2025-10-12 15:18:00'),
(24, 'Área e Perímetro', 'Cálculos geométricos', 'NIVEIS/5/area e perimetro.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00'),
(25, 'Figuras e Ângulos', 'Relações geométricas', 'NIVEIS/5/figuras e angulos.php', 'Geometria', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00'),
(26, 'Frações e Decimais', 'Números racionais', 'NIVEIS/5/fracoes e decimais.php', 'Frações', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00'),
(27, 'Frações', 'Conceitos básicos de frações', 'NIVEIS/5/fracoes.php', 'Frações', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00'),
(28, 'Gráficos', 'Análise de dados', 'NIVEIS/5/graficos.php', 'Estatística', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00'),
(29, 'Números Decimais', 'Operações com decimais', 'NIVEIS/5/numeros.php', 'Números', 'SEÇÃO 1', 'UNIDADE 5', 1, '2025-10-12 15:18:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `shop_categories`
--

DROP TABLE IF EXISTS `shop_categories`;
CREATE TABLE IF NOT EXISTS `shop_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `shop_categories`
--

INSERT INTO `shop_categories` (`id`, `name`, `icon`, `description`, `created_at`) VALUES
(1, 'Pele', '👤', 'Cores de pele para personalização', '2025-10-12 15:18:00'),
(2, 'Cabelo', '💇', 'Estilos e cores de cabelo', '2025-10-12 15:18:00'),
(3, 'Olhos', '👀', 'Cores e formatos de olhos', '2025-10-12 15:18:00'),
(4, 'Boca', '👄', 'Expressões faciais', '2025-10-12 15:18:00'),
(5, 'Roupas', '👕', 'Camisetas, vestuário e acessórios', '2025-10-12 15:18:00'),
(6, 'Especiais', '⭐', 'Itens raros e exclusivos', '2025-10-12 15:18:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `shop_items`
--

DROP TABLE IF EXISTS `shop_items`;
CREATE TABLE IF NOT EXISTS `shop_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `category_id` int NOT NULL,
  `price_xp` int NOT NULL,
  `rarity` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'common',
  `item_type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `item_data` json DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `shop_items`
--

INSERT INTO `shop_items` (`id`, `name`, `description`, `category_id`, `price_xp`, `rarity`, `item_type`, `item_data`, `is_active`, `created_at`) VALUES
(1, 'Pele Clara', 'Tom de pele claro', 1, 50, 'common', 'skin', '{\"part\": \"skin\", \"color\": \"#FFDBAC\"}', 1, '2025-10-12 15:18:00'),
(2, 'Pele Média', 'Tom de pele médio', 1, 50, 'common', 'skin', '{\"part\": \"skin\", \"color\": \"#D2B48C\"}', 1, '2025-10-12 15:18:00'),
(3, 'Pele Escura', 'Tom de pele escuro', 1, 50, 'common', 'skin', '{\"part\": \"skin\", \"color\": \"#8B4513\"}', 1, '2025-10-12 15:18:00'),
(4, 'Pele Dourada', 'Tom de pele dourado especial', 1, 200, 'rare', 'skin', '{\"part\": \"skin\", \"color\": \"#FFD700\"}', 1, '2025-10-12 15:18:00'),
(5, 'Cabelo Curto Preto', 'Cabelo curto na cor preta', 2, 100, 'common', 'hair', '{\"part\": \"hair\", \"color\": \"#2C3E50\", \"style\": \"short\"}', 1, '2025-10-12 15:18:00'),
(6, 'Cabelo Médio Castanho', 'Cabelo médio na cor castanha', 2, 100, 'common', 'hair', '{\"part\": \"hair\", \"color\": \"#8B4513\", \"style\": \"medium\"}', 1, '2025-10-12 15:18:00'),
(7, 'Cabelo Longo Loiro', 'Cabelo longo na cor loira', 2, 150, 'common', 'hair', '{\"part\": \"hair\", \"color\": \"#F1C40F\", \"style\": \"long\"}', 1, '2025-10-12 15:18:00'),
(8, 'Cabelo Cacheado', 'Cabelo cacheado estilo afro', 2, 120, 'common', 'hair', '{\"part\": \"hair\", \"color\": \"#2C3E50\", \"style\": \"curly\"}', 1, '2025-10-12 15:18:00'),
(9, 'Cabelo de Fada', 'Cabelo colorido especial', 2, 300, 'epic', 'hair', '{\"part\": \"hair\", \"color\": \"#E74C3C\", \"style\": \"magic\"}', 1, '2025-10-12 15:18:00'),
(10, 'Olhos Castanhos', 'Olhos redondos na cor castanha', 3, 80, 'common', 'eyes', '{\"part\": \"eyes\", \"color\": \"#8B4513\", \"shape\": \"round\"}', 1, '2025-10-12 15:18:00'),
(11, 'Olhos Azuis', 'Olhos redondos na cor azul', 3, 80, 'common', 'eyes', '{\"part\": \"eyes\", \"color\": \"#3498DB\", \"shape\": \"round\"}', 1, '2025-10-12 15:18:00'),
(12, 'Olhos Verdes', 'Olhos redondos na cor verde', 3, 80, 'common', 'eyes', '{\"part\": \"eyes\", \"color\": \"#27AE60\", \"shape\": \"round\"}', 1, '2025-10-12 15:18:00'),
(13, 'Olhos Felizes', 'Olhos com expressão feliz', 3, 120, 'rare', 'eyes', '{\"part\": \"eyes\", \"color\": \"#2C3E50\", \"shape\": \"happy\"}', 1, '2025-10-12 15:18:00'),
(14, 'Olhos Brilhantes', 'Olhos com brilho especial', 3, 200, 'epic', 'eyes', '{\"part\": \"eyes\", \"color\": \"#9B59B6\", \"shape\": \"sparkle\"}', 1, '2025-10-12 15:18:00'),
(15, 'Sorriso', 'Expressão sorridente', 4, 60, 'common', 'mouth', '{\"part\": \"mouth\", \"color\": \"#E75480\", \"expression\": \"smile\"}', 1, '2025-10-12 15:18:00'),
(16, 'Boca Neutra', 'Expressão neutra', 4, 60, 'common', 'mouth', '{\"part\": \"mouth\", \"color\": \"#E75480\", \"expression\": \"neutral\"}', 1, '2025-10-12 15:18:00'),
(17, 'Sorriso Aberto', 'Sorriso grande e aberto', 4, 90, 'common', 'mouth', '{\"part\": \"mouth\", \"color\": \"#C0392B\", \"expression\": \"big_smile\"}', 1, '2025-10-12 15:18:00'),
(18, 'Boca Surpresa', 'Expressão de surpresa', 4, 100, 'rare', 'mouth', '{\"part\": \"mouth\", \"color\": \"#E74C3C\", \"expression\": \"surprised\"}', 1, '2025-10-12 15:18:00'),
(19, 'Camiseta Azul', 'Camiseta básica azul', 5, 150, 'common', 'clothing', '{\"part\": \"clothing\", \"type\": \"shirt\", \"color\": \"#3498DB\", \"style\": \"basic\"}', 1, '2025-10-12 15:18:00'),
(20, 'Camiseta Vermelha', 'Camiseta básica vermelha', 5, 150, 'common', 'clothing', '{\"part\": \"clothing\", \"type\": \"shirt\", \"color\": \"#E74C3C\", \"style\": \"basic\"}', 1, '2025-10-12 15:18:00'),
(21, 'Camiseta Verde', 'Camiseta básica verde', 5, 150, 'common', 'clothing', '{\"part\": \"clothing\", \"type\": \"shirt\", \"color\": \"#27AE60\", \"style\": \"basic\"}', 1, '2025-10-12 15:18:00'),
(22, 'Vestido Rosa', 'Vestido elegante rosa', 5, 250, 'rare', 'clothing', '{\"part\": \"clothing\", \"type\": \"dress\", \"color\": \"#FF6B8B\", \"style\": \"dress\"}', 1, '2025-10-12 15:18:00'),
(23, 'Camiseta Listrada', 'Camiseta com listras coloridas', 5, 180, 'common', 'clothing', '{\"part\": \"clothing\", \"type\": \"shirt\", \"color\": \"#7A5CFF\", \"style\": \"striped\"}', 1, '2025-10-12 15:18:00'),
(24, 'Uniforme Escolar', 'Uniforme estilo escolar', 5, 300, 'rare', 'clothing', '{\"part\": \"clothing\", \"type\": \"uniform\", \"color\": \"#2C3E50\", \"style\": \"uniform\"}', 1, '2025-10-12 15:18:00'),
(25, 'Óculos Redondos', 'Óculos estilo vintage', 5, 200, 'rare', 'accessory', '{\"part\": \"accessory\", \"type\": \"glasses\", \"color\": \"#2C3E50\", \"style\": \"round\"}', 1, '2025-10-12 15:18:00'),
(26, 'Óculos de Sol', 'Óculos escuros modernos', 5, 180, 'rare', 'accessory', '{\"part\": \"accessory\", \"type\": \"glasses\", \"color\": \"#34495E\", \"style\": \"sunglasses\"}', 1, '2025-10-12 15:18:00'),
(27, 'Laço Vermelho', 'Laço elegante vermelho', 5, 120, 'common', 'accessory', '{\"part\": \"accessory\", \"type\": \"bow\", \"color\": \"#E74C3C\", \"style\": \"red_bow\"}', 1, '2025-10-12 15:18:00'),
(28, 'Coroa Dourada', 'Coroa real dourada', 5, 500, 'legendary', 'accessory', '{\"part\": \"accessory\", \"type\": \"crown\", \"color\": \"#FFD700\", \"style\": \"gold\"}', 1, '2025-10-12 15:18:00'),
(29, 'Chapéu de Cowboy', 'Chapéu estilo cowboy', 5, 220, 'rare', 'accessory', '{\"part\": \"accessory\", \"type\": \"hat\", \"color\": \"#8B4513\", \"style\": \"cowboy\"}', 1, '2025-10-12 15:18:00'),
(30, 'Avatar Matemático', 'Avatar temático de matemática', 6, 800, 'epic', 'special', '{\"part\": \"special\", \"theme\": \"math\", \"effects\": [\"glow\", \"sparkle\"], \"set_type\": \"math\"}', 1, '2025-10-12 15:18:00'),
(31, 'Traje de Gênio', 'Traje completo de gênio', 6, 1000, 'legendary', 'special', '{\"part\": \"special\", \"theme\": \"genius\", \"effects\": [\"crown\", \"wisdom\"], \"set_type\": \"genius\"}', 1, '2025-10-12 15:18:00'),
(32, 'Avatar Arco-Íris', 'Avatar colorido especial', 6, 600, 'epic', 'special', '{\"part\": \"special\", \"theme\": \"rainbow\", \"effects\": [\"color_cycle\", \"happy\"], \"set_type\": \"rainbow\"}', 1, '2025-10-12 15:18:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `created_at`) VALUES
(1, 'jeipi7007@gmail.com', 'Jaozin', '$2y$10$v/24lSZ5fEs.6nADbzFW4.odHeKIvvYr1nGD9y3JMU4KYbRHXOzSS', '2025-10-12 15:18:32'),
(2, 'asdsdfsd@email.com', '123', '$2y$10$c8tH7WDZed.WalTDvu5IdefQfZRvSim5CEpiigSHkHzjDBg73ZBnO', '2026-04-25 03:17:11'),
(3, 'sssssss@gmail.com', 'Joao Pedro Carvalho', '$2y$10$uCRV3At.IwDGoMBPj4/LAub4QCNewWeGXHKETw1sZW3q3lz.IBdre', '2026-04-25 03:18:19');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_achievements`
--

DROP TABLE IF EXISTS `user_achievements`;
CREATE TABLE IF NOT EXISTS `user_achievements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `achievement_id` int NOT NULL,
  `unlocked_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `progress_current` int DEFAULT '0',
  `progress_required` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_achievement` (`user_id`,`achievement_id`),
  KEY `achievement_id` (`achievement_id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user_achievements`
--

INSERT INTO `user_achievements` (`id`, `user_id`, `achievement_id`, `unlocked_at`, `progress_current`, `progress_required`) VALUES
(1, 1, 1, '2025-11-01 23:03:57', 1, 1),
(2, 1, 12, '2025-11-01 23:03:57', 2, 120),
(3, 1, 19, '2025-11-01 23:03:57', 1, 1),
(4, 1, 20, '2025-11-01 23:03:57', 1, 1),
(5, 1, 11, '2025-11-03 01:25:02', 92, 90),
(6, 1, 10, '2025-11-03 01:25:03', 1, 1),
(7, 1, 13, '2025-11-03 01:25:03', 100, 95),
(8, 2, 1, '2025-11-13 21:24:27', 1, 1),
(9, 2, 12, '2025-11-13 21:24:27', 5, 120),
(10, 2, 19, '2025-11-13 21:24:27', 1, 1),
(11, 2, 21, '2025-11-13 21:24:30', 3, 3),
(12, 2, 11, '2025-11-13 21:25:06', 90, 90),
(13, 2, 10, '2025-11-13 21:25:11', 1, 1),
(14, 3, 1, '2026-04-25 03:19:05', 1, 1),
(15, 3, 12, '2026-04-25 03:19:05', 2, 120),
(16, 3, 19, '2026-04-25 03:19:05', 1, 1),
(17, 3, 20, '2026-04-25 03:19:05', 1, 1),
(18, 3, 21, '2026-04-25 03:19:08', 3, 3),
(19, 3, 11, '2026-04-25 03:19:16', 92, 90),
(20, 3, 10, '2026-04-25 03:19:18', 1, 1),
(21, 3, 15, '2026-04-25 03:19:53', 3, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_avatar`
--

DROP TABLE IF EXISTS `user_avatar`;
CREATE TABLE IF NOT EXISTS `user_avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `avatar_data` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_avatar` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user_avatar`
--

INSERT INTO `user_avatar` (`id`, `user_id`, `avatar_data`, `created_at`, `updated_at`) VALUES
(1, 2, '{\"mood\": \"happy\", \"special\": null, \"species\": \"fox\", \"accessory\": null, \"color_variant\": \"default\"}', '2025-11-13 21:23:25', '2025-11-13 21:23:25'),
(2, 3, '{\"mood\": \"happy\", \"special\": null, \"species\": \"fox\", \"accessory\": null, \"color_variant\": \"default\"}', '2026-04-25 03:18:25', '2026-04-25 03:21:23');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_inventory`
--

DROP TABLE IF EXISTS `user_inventory`;
CREATE TABLE IF NOT EXISTS `user_inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `purchased_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_equipped` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_item` (`user_id`,`item_id`),
  KEY `item_id` (`item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user_inventory`
--

INSERT INTO `user_inventory` (`id`, `user_id`, `item_id`, `purchased_at`, `is_equipped`) VALUES
(1, 3, 27, '2026-04-25 03:21:06', 0),
(2, 3, 29, '2026-04-25 03:21:17', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_progress`
--

DROP TABLE IF EXISTS `user_progress`;
CREATE TABLE IF NOT EXISTS `user_progress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `activity_id` int NOT NULL,
  `score` int DEFAULT '0',
  `total_questions` int DEFAULT '0',
  `correct_answers` int DEFAULT '0',
  `wrong_answers` int DEFAULT '0',
  `completed` tinyint(1) DEFAULT '0',
  `time_spent` int DEFAULT '0',
  `attempts` int DEFAULT '1',
  `last_attempt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_activity` (`user_id`,`activity_id`),
  KEY `activity_id` (`activity_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user_progress`
--

INSERT INTO `user_progress` (`id`, `user_id`, `activity_id`, `score`, `total_questions`, `correct_answers`, `wrong_answers`, `completed`, `time_spent`, `attempts`, `last_attempt`, `created_at`) VALUES
(1, 1, 2, 12, 12, 12, 0, 1, 214, 41, '2025-11-03 01:25:30', '2025-11-01 23:03:57'),
(2, 1, 18, 1, 12, 1, 0, 0, 1, 1, '2025-11-01 23:04:03', '2025-11-01 23:04:03'),
(3, 2, 27, 10, 10, 10, 0, 1, 331, 11, '2025-11-13 21:25:11', '2025-11-13 21:24:27'),
(4, 2, 28, 9, 9, 9, 0, 1, 1905, 23, '2025-11-13 22:05:34', '2025-11-13 22:01:19'),
(5, 2, 29, 10, 12, 10, 2, 0, 899, 13, '2025-11-13 22:57:38', '2025-11-13 22:56:02'),
(6, 3, 5, 12, 12, 12, 0, 1, 106, 13, '2026-04-25 03:19:18', '2026-04-25 03:19:05'),
(7, 3, 16, 12, 12, 12, 0, 1, 294, 13, '2026-04-25 03:19:53', '2026-04-25 03:19:41');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user_xp`
--

DROP TABLE IF EXISTS `user_xp`;
CREATE TABLE IF NOT EXISTS `user_xp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `total_xp` int DEFAULT '0',
  `current_level` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_xp` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user_xp`
--

INSERT INTO `user_xp` (`id`, `user_id`, `total_xp`, `current_level`, `created_at`, `updated_at`) VALUES
(1, 1, 1530, 2, '2025-11-01 23:03:57', '2025-11-03 01:25:03'),
(2, 2, 1570, 2, '2025-11-13 21:24:27', '2025-11-13 22:05:34'),
(3, 3, 1610, 2, '2026-04-25 03:18:48', '2026-04-25 03:21:17');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
