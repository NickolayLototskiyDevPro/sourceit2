<!doctype html>
<html>
    <?php include('partials/head.php')?>
<body>
    <div id="wrapper">
        <?php include('partials/header.php')?>
        <main id="main5">
            <a href="home_page.php" class="a">Главная</a>
            <p>Кабинетная мебель</p>
            <div class="flex-container">
              <a href="tab_content.php" class="flex-item"><span><p>Модульные системы</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Детская мебель</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Спальни</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Модульные системы</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Детская мебель</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Спальни</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Модульные системы</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Детская мебель</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Спальни</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Модульные системы</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Детская мебель</p></span></a>
              <a href="tab_content.php" class="flex-item"><span><p>Спальни</p></span></a>
            </div>
            <form name="adeuately" method="post">
                <p>Форма:<Br>
                   <span class="inp"><input type="checkbox" name="form" value="round"> круглая</span><Br>
                   <span><input type="checkbox" name="form" value="rectangular"> прямоугольная</span><Br>
                   <span><input type="checkbox" name="form" value="oval"> овальная</span><Br>
                </p>
                <p>Цена:<Br>
                   <span class="inp"><input type="checkbox" name="cost" value="ie"> 100-1000</span><Br>
                   <span><input type="checkbox" name="cost" value="opera"> 1001-5000</span><Br>
                   <span><input type="checkbox" name="cost" value="firefox"> 5001-10000</span><Br>
                </p>    
            </form>
        </main>
        <?php include('partials/sidebar.php')?>
        <?php include('partials/footer.php')?>
    </div>    
</body>
</html>