# Multi-module Hilla project based on Gradle

This project can be used as a starting point to create completely separated backend-frontend Hilla application with Spring Boot.
It contains all the necessary configuration and some placeholder files to get you started.

## Running the application

The project is a standard Gradle project. To run it from the command line,
type `gradlew` (Windows), or `./gradlew` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any Gradle project.
Then you can run the main method of `Application.java` under **webapp** module.
This will build the **backend** module first, and then runs the **webapp** which uses the endpoints from **backend** module.

## Deploying to Production

To create a production build, call `gradlew -Pvaadin.productionMode=true webapp:build` (Windows),
or `./gradlew -Pvaadin.productionMode=true :webapp:build` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources, ready to be deployed. 
The file can be found in the `build/libs/` folder after the build completes.

Once the JAR file is built, you can run it using `java -jar webapp/build/libs/webapp.jar` from the project root directory.
The application will available at: http://localhost:8080/.

## Project structure

<table style="width:100%; text-align: left;">
  <tr><th>Directory</th><th>Description</th></tr>
  <tr><td><code>[project-directory]</code></td><td>The parent gradle module that contains two sub-projects</td></tr>
  <tr><td><code>backend/</code></td><td>Contains a pure spring-boot backend application</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>src/main/java/</code></td><td></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>com.example.backend/</code></td><td></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>data/</code></td><td>JPA Entities</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>endpoints/</code></td><td>Classes annotated with @Endpoint</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>repository/</code></td><td>JPA Repositories</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Spring-boot application main class</td></tr>
  <tr><td><code>webapp/</code></td><td>Contains a Hilla application that uses the endpoints from backend module</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>frontend/</code></td><td>Client-side source directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>index.html</code></td><td>HTML template</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>index.ts</code></td><td>Frontend 
entrypoint, bootstraps a React application</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>routes.tsx</code></td><td>React Router routes definition</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>MainLayout.tsx</code></td><td>Main 
layout component, contains the navigation menu, uses <a href="https://hilla.dev/docs/react/components/app-layout">
App Layout</a></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>views/</code></td><td>UI view 
components</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>themes/</code></td><td>Custom  
CSS styles</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>src/main/java/</code></td><td></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>com.example.webapp/</code></td><td></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Spring-boot application main class</td></tr>
</table>

## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/hilla) or join our [Discord channel](https://discord.gg/MYFq5RTbBn).
- Report issues, create pull requests in [GitHub](https://github.com/vaadin/hilla).
