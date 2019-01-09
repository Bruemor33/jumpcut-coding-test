# Jumpcut Coding Challenge

### Challenge Checklist
+ Test Driven Development Examples
+ Show understanding of JS fundamentals
+ Application must activate a sequencer
+ Nested Components
+ Appropriate state managemennt
+ Allow the user to optionally add the accumulator / isEven functions to the pipeline.
+ Showcase UI skills

# A Counting Application

After reading and digesting the fullstack challenge I decided to keep it simple. The last thing I wanted to do was plan out something too grand that would have produced mediocre quantity over quality.

### UI Design Decisions

The ui is very simple. I just chose to include an h1 to title the application, followed by two paragraphcs that give explenations as to the controls of the count. I chose to include instructional descriptions because of the seo experience I gained working in eCommerce. You can design a ui many different ways, but if you don't supply proper content to help the user understand what to do, you've lost a customer.

I follow up the descriptions with value titles. One for the counter and one for the accumulater. This helps break up the values on the page and set them apart. It helps the user to clearly see the affects of the buttons.

Bootstrap had a great class that would allow you to have multiple buttons in a row that combined without spaces and hard corners where they touched. I wanted to mimic this styling for the increase and decrease buttons. For the purpose they serve they needed to be together and for that to be obvious. The accumulate button is placed bellow the increase and decrease to keep them in a uniform unit of interactivity. I also wanted them to be convienient and useful for a responsive design approach.

### Technology and Code Design Decisions

I chose to use scss as it's just the file extension I enjoy more than sass... I used a structure of directories and top level files to better organize the style code. A variables file for holding any color variables, fonts, screen breakpoints, ect. This allows me to reuse properties through out the project eleminating redundecy. I chose to use css grids, something I'm not too familiar with, because css is a strength. Bootstrap was considered do to the fact that I have years of experience using it, I just believe it's way to heavy and combersome for what this project called for.

Before starting this test I had begun working on a react based boiler plate that uses webpack. I brought redux in because it's used in your stack at Jumpcut and I've been curious about using it for state management. My background is mostly in Object Oriented Programming within the Symphony php framework, so wrapping my mind more around Functional Based programming within redux and it's use where a challenge. I chose to do my sequencer and generator composition within my accumulater event within my root reducer because it felt more comfortable there. I did want to bring it out, but do to how much learning I was doing on the run with the time limit, I decided to just get things working there and keep it there. Get it working, then refactor it later.

At my previous position, I delt with so much legacy php through out the sites that implementing any kind of TDD was way at the bottom of the backlog. I chose to use enzyme because it's developed and maintained by Airbnb. I joined this with Jasmine as I've briefly looked into it in the past when researching how to test my front end code better.

I chose Webpack as my module bundler because it's something I've grown to really enjoy using over the last year. I like to include webpack-dev-server so that any code changes are being compiled live and I don't have to waste key strokes on refreshing the window. Along with webpack came @babel/ and a handfull of support packages specific to it. This was mainly done to fix any issues when using ES6 in the project.




