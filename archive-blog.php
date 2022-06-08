<?php
/*
* Template name: Блог
*/
get_header();
?>

    <section class="hero work-hero blog">
        <div class="container hero__contain">
            <div class="row work-hero__main justify-content-between">
                <div class="hero__left work-hero__left col-xl-6 col-md-7 col-12">                    
                    <h1 class="work-hero__heading blog__heding">
                        <?php the_title(); ?>
                    </h1>
                  
                    <p class="hero__descr blog__descr col-lg-9 col-11">
                        <?php the_field('blog_description'); ?>
                    </p>

                    <span class="breadcrumbs">
                        <a href="/">главная</a> / <?php the_title(); ?>
                    </span>
                </div>

                <div class="work-hero__right col-md-5 col-11">
                    <picture class="hero__right work-hero__image">
                        <source media="(max-width:1199px)" srcset="/wp-content/themes/radionova/img/blog-img-1024@1x.jpg 1х, /wp-content/themes/radionova/img/blog-img-1024@2x.jpg 2x">
                        <source media="(max-width: 991px)" srcset="/wp-content/themes/radionova/img/blog-img-768@1x.jpg 1х, /wp-content/themes/radionova/img/blog-img-768@2x.jpg 2x">                        
                        
                        <img class="about__img" src="/wp-content/themes/radionova/img/blog-img@1x.jpg" srcset="/wp-content/themes/radionova/img/blog-img@2x.jpg 2x" alt="Страница блога" >
                    </picture>
                </div>         
            </div>            
        </div>

        <div class="dark col-md-1 col-4"></div>
        <div class="medium col-md-8 col-12"></div>
    </section>

    <section class="articles">
        <div class="container">
            <div class="blog__stripe">
                <span class="listBlock blog__list level-btn row justify-content-between">
                    <div class="level-btn__block">
                        <span class="level-btn__table"></span>

                        <button id="block1" class="block1Link link1">плиткой</button>
                    </div>

                    <div class="level-btn__block">
                        <span class="level-btn__list"></span>

                        <button id="block2" class="block1Link link2">списком</button>  
                    </div>      
                </span>
            </div>

            <ul id="table" class="blog__table blog-table row align-items-stretch">

            <?php
   
            $query = new WP_Query( array(
                'post_type' => 'post',
                'orderby' => 'ID',
                'order' => 'ASC',
                'posts_per_page' => -1,

            ) );

            if( $query->have_posts() ): 

            while( $query->have_posts() ) : $query->the_post();
            setup_postdata($post);
            ?>

                <li class="blog-table__item col-xl-4 col-md-6 col-12">
                    <div class="blog-table__top">                        
                        <figure class="blog-table__image">
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" class="blog-table__img">
                        </figure>

                        <div class="article__content">
                            <a href="<?php echo $post->post_name;?>" class="blog-table__to">
                                <h3 class="blog-table__heading">
                                    <?php echo $post->post_title; ?>
                                </h3>
                            </a>

                            <p class="blog-table__text">
                                <?php echo $post->post_excerpt; ?>...  
                            </p>
                        </div>
                    </div>

                    <div class="blog-table__bottom row justify-content-between">
                        <date class="blog-table__date"><?php the_date(); ?></date>

                        <a href="<?php echo $post->post_name;?>" class="blog-table__link">читать далее</a>                        
                    </div>

                    <div class="dark dark-right col-4"></div>
                </li>

            <?php  	endwhile;
            wp_reset_postdata(); 

            else: ?>
                <div class="blog-none">
                    <p class="blog-none__text">Статьи пока не добавлены.</p>

                    <a class="list-more" href="/"> Перейти на главную</a>
                </div>             
            
            <?php endif;
            ?> 

            </ul>

            <ul id="list" class="blog__list blog-list">

            <?php
   
            $query = new WP_Query( array(
                'post_type' => 'post',
                'orderby' => 'ID',
                'order' => 'ASC',
                'posts_per_page' => -1,

            ) );           

            while( $query->have_posts() ) : $query->the_post();
            setup_postdata($post);
            ?>

                <li class="blog-list__item row justify-content-between">               
                    <figure class="blog-list__image">
                        <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" class="blog-table__img">
                    </figure>

                    <div class="blog-list__right">
                        <div class="row blog-list__block row justify-content-between">
                            <a href="<?php echo $post->post_name;?>" class="blog-table__to">
                                <h3 class="blog-list__heading">
                                    <?php echo $post->post_title; ?>
                                </h3>
                            </a>

                            <date class="blog-list__date"><?php the_date(); ?></date>
                        </div>

                        <p class="blog-list__text">
                            <?php echo $post->post_excerpt; ?>...  
                        </p>

                        <a href="<?php echo $post->post_name;?>" class="blog-table__link">читать далее</a>
                    </div> 
                    
                    <div class="dark dark-right col-2"></div>
                </li>

            <?php  	endwhile;
            wp_reset_postdata(); 
            ?>

            </ul>
        </div>    
    </section>

    <?php get_template_part('to-action'); ?>    

<?php get_footer(); ?>