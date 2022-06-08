<?php
/*
* Template name: Текстовый документ
*/ ?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>
</head>

<body>
    <div class="container textdoc">
        <h1 class="textdoc__heading">
            <?php the_title(); ?>
        </h1>

        <span class="breadcrumbs textdoc__breadcrumbs">
            <a href="/">главная</a> / <?php the_title(); ?>
        </span>

        <?php echo get_the_content(); ?>

        <a class="blue-button textdoc__button" href="/">
            <span class="button__text">на главную</span>                        
        </a>  
    </div>
</body>

<?php get_footer(); ?>

