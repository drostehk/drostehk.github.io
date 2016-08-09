Title: Creating additional value by automating wealth management
Date: 2016-08-07 17:30
Category: Case Studies
Summary: We have been working together with a well-established and successful wealth management company to automate their workflow.
Image: /content/img/price-vs-carat.png

## Background

We have been working together with a well-established and successful wealth management company to automate their workflow. Automation is saving their team a significant amount of time, improving the accuracy of their reporting, allowing them to focus on engaging with their clients, and providing a more accelerated and deeper understanding of their business.

We initially met with the company in early 2015 to discuss how we could work together to address some of the organization's pain points and optimize their workflows through automation. During discussions with the team we identified key problems that they wanted to solve including:

- Reducing the amount of time employees spent manually checking and entering data feeds received from fund custodians.
- Reducing errors introduced during manual entry of information received from clients and custodians.
- Accelerating and improving the accuracy of their client reporting process.

Through our discussions we also discovered that we could provide additional value to the company beyond solving these problems. By transitioning their data collection, processing and analysis from an Excel and Access-based workflows to a customizable web service where all of their data was consolidated, it would now be possible to:

- Understand their clients and business more holistically.
- Create dashboards and visualizations to help them better understand and react to changes in client portfolios.
- Validate entered information to reduce manual entry errors.
- Highlight anomalies in data feeds received from custodians.
- Assist with the accounting and reconciliation process.

## Diving deeper
After identifying the key goals of the project, it was time to get a deeper understanding of the workflows in place in the organization. Over the next few weeks we had frequent meetings with different teams within the organization to gather a better understanding of each team's processes, which parts could be automated in a reasonable timeframe, and how we could preserve their workflows in the new system. Preserving their workflows was key to creating a successful system that the teams would be comfortable transitioning to use. We knew that if the system felt too foreign or disconnected from what they knew, no one would use it.

Through this requirements gathering period we made numerous diagrams that illustrated the processes that the teams had in place and created a design language for discussing them. The teams were thrilled with this because none of them had never seen their workflows laid out in such detail. Having a standard language and diagrams allowed us to move much more rapidly and identify special cases that existed and were overlooked in our initial discussions.

## Building the solution
Once we had a better understanding of the workflows in place, we began implementing the system. We followed an Agile approach which allowed us to do frequent demos of deliverables for our client and provide them with opportunities to use the system and provide feedback. This allowed us to ensure that we were building exactly what they needed and avoided lengthy rework that can occur when all stakeholders are not engaged in the product development all along the way.

During the development we encountered many challenges as we discovered that a great deal of the data we were receiving from the fund custodians was inconsistent, irrelevant, or missing. We designed and built a very flexible system that is able to handle all of the scenarios we encountered in addition to many that we never observed.

Our system also looks for abnormalities in the data received. Many common abnormalities can be corrected automatically. For the times when the solution to abnormal data is ambiguous the system notifies the staff immediately to ensure that problems can be resolved quickly.

Part of what allowed us to produce a flexible and self-healing system was a large suite of tests that exercise the data intake and processing system for all encountered and many additional scenarios. These tests also help us to ensure that the system continues to function as expected when new features are added.

Our client also has very strict security protocols to ensure that their data is safe. During the design of our infrastructure and development of the system we followed industry best practices including:
- Ensuring that all of their sensitive data is encrypted at rest
- Limiting access to critical parts of the system
- Automating installation of security updates and patches
- Minimizing packages installed and ports open
- Completely separating the production and staging / testing systems from each other

Since our client relies on this system to run their business, we built a highly available infrastructure to minimize downtime. By spreading their infrastructure across multiple zones, we can ensure that even if one zone is down, the other zone continues to provide them with access to their application. Further, we have automated the process of monitoring their web and application servers for issues and automatically replacing them with new servers if an issue occurs.

## Conclusion
Not sure what to say here since still ongoing... Suggestions welcome :-)
