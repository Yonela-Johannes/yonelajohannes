import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import './projects.css'
import { projects, other_projects } from '../data/data'

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <div className="container">
          <h2 className="title" data-outline="Projects">My work!</h2>
          <h2 className="title" data-outline="Projects">Public Notice!</h2>
          <p className='about_tags'>Please note that I am unable to display some of my deployed projects that utilize Postgres databases due to Heroku's free tier closure. However, during my bootcamps, I gained valuable experience working on these projects, which allowed me to develop a strong foundation in database management and deployment. Although I cannot showcase these specific projects here, you can find them on my Github account, where I have made the code available for viewing. I am confident in my ability to work with databases and deploy applications using various tools and services, and I invite you to check out my other projects on Github as well.</p>
          <br />
          <div className="about_tags">In the meantime, here are my top three projects on Github:
          </div>
          <div className='pr'>
            <div className='projects__cards'>
              <div className="about__title">Shuukata</div>
              <p className='about__info'>
                - built using Handlebars as a framework, and employs JavaScript and Node.js to manage ecommerce data.
                <br />
                - offers customers the ability to view a wide selection of shoes, filter them by brand, size, color, and price, and search for specific items.
                <br />
                - customers can add items to their shopping cart and checkout.
                <br />
                The use of Handlebars allows for efficient rendering of dynamic pages, while Node.js enables fast and secure data management for ecommerce transactions.
                <br />
                The website is designed to provide customers with a seamless shopping experience and ensure that they find the perfect pair of shoes to suit their needs.
              </p>
              <div className='tech__tag'>JavaScript, Handlebars, CSS, HTML, Postgresql</div>
              <a target="_blank" href="https://github.com/Yonela-Johannes/shoe_catalogue" className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>
            </div>
            <div className='projects__cards'>
              <div className="about__title">Buhle Hair Salon</div>
              <p className='about__info'>
                - website was built using JavaScript and Node.js, and employs Postgres CRUD requests to manage salon data.
                <br />
                - offers customers the ability to view salon services, filter them by category or price, and search for specific services.
                <br />
                - customers can also schedule appointments online, while salon staff have an intuitive interface for managing bookings and customer information.
                <br />
                - the use of Postgres enables secure and efficient storage and retrieval of salon data, helping to ensure that it runs smoothly and customers are satisfied.
              </p>
              <div className='tech__tag'>JavaScript, HTML, CSS & Postgesql</div>
              <a target="_blank" href="https://github.com/Yonela-Johannes/buhles-salon" className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>
            </div>
            <div className='projects__cards'>
              <div className="about__title">Restaurant Manager</div>
              <p className='about__info'>
              The restaurant review web application was built using Ruby on Rails and SQLite to manage restaurant data.
              <br />
              - As a user, I am able to search for and view detailed information about specific restaurants, including reviews, ratings, and menus.
              <br />
              - I am also able to create an account and post my own reviews of restaurants that I have visited, helping other users to make informed dining decisions.
              <br />
              - The use of SQLite allows for efficient storage and retrieval of restaurant data, while Ruby on Rails provides a framework for rapid development and easy maintenance of the web application.
              <br />
              The web application is designed to help users discover new restaurants, share their dining experiences, and contribute to a community of food enthusiasts.
              </p>
              <div className='tech__tag'>Ruby &  Ruby on Rails</div>
              <a target="_blank" href="https://github.com/Yonela-Johannes/rails-yelp-mvp" className="primary-btn outline external-link"> <span><AiFillGithub className='icon'/></span></a>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
