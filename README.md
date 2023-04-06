# builderlist-client

# _Final Assessment_

## Overview

The WDI-200 Final Assessment will be used to guage whether or not a student is capable of semi-independent fullstack development. The project must be: created using the MERNstack (MongoDB, ExpressJS, ReactJS, and NodeJS), deployed to a hosted environment with a public url domain (Heroku, Digital Ocean, Vercel, etc.), must include user login and registration functionality, and include core CRUD functionality (Create, Read, Update, and Delete).

The overall project goal is to create a searchable database for contractors similar to the old Angie's List.  The database will have multiple types of users including Admin, Contractor, and Customer.  The contractor will be able to input the company details including name, types of construction trades, website, state licensing info, etc..  Customers will be able to search the database by location, work type and company name.  State licensing info will include links to the state licensing board search page, and directly to the companies license entry where feasible [Stretch].  Customers will also have the ability to leave feedback/reviews for the contractors [Stretch].  


The Final Assessment will be graded as follows. Implementation of the core requirements will constitute a passing grade. Implementation of all the core requirements with the stretch requirements will constitute a B grade. Implementation of core requirements, stretch requirements, and ANY super stretch requirement will constitute an A grade.


## Tech Stack

- [Required] Node - Runtime
- [Required] React - Client Framework
- [Required] Express - Server Framework
- [Required] MongoDB - Database
- [Required] Git - Code Versioning
- [Required] Github - Code Storage and Collaboration
- [Required] CORS - Express CORS Library
- [Suggested] bcryptJS - User Authentication
- [Suggested] JsonWebToken - User Auth Tokens
- [Suggested] Bootstrap - CSS Framework
- [Suggested] Nodemon - Server Hot Reloading
- [Suggested] React-Router - Client Side Routing
- [Suggested] uuidv4 - Unique ID Generator

## Core Requirements

### User Login and Registration

- [Core] 
  - A user should be able to register with the application.
    - [Stretch] The user's password should be encrypted via salt+hash algorithm.
  - A user should be able to login with the application.
    - [Stretch] A user ID Token should be generated using JsonWebToken. The ID Token should then be persisted on client side with local storage. The client should then check for the existence of the token before prompting the user to authenticate.
    - [Stretch] A user should be able to logout of the application and login with a different account.

### Ticket Management

- [Core]
  - A user should be able to create a new entry and edit an existing entry.
    - [Stretch] There should be a page or modal for users to create new entries. 
    - [Stretch] A user should be able to create and edit the following fields on a ticket:
      - userFirstName {String}
      - userLastName {String}
      - companyName {String}
      - userEmail {String}
      - companyContactEmail {String}
      - companyAddress { Array }
      - companyPhone {Number}
      - licenseInfo {
            State:
            LicenseNo:
            LicenseClass: (may vary by state)
        }
      - workTypes ["Roofing", "Foundations", "Drywall", "Electrical", etc.]
      - website {String}
      - freeEstimate {Boolean}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}
  - A user should be able to delete an entry.
  - [Stretch] Only one entry per contractor
    - [Stretch] A contractor should have easy acces to edit their entry.
  - [Stretch] Customers should be able to create a favorites list.
    - [Stretch] The favorites list should be sortable and filterable.
    - [Stretch] The favorites list should be paginated.
    

### Project
- [Stretch]
  - Create Project README


### Super Stretch Goals

- Add support for users to be part of an organization.
- Add support for admin users in an organization to have authorized privileges that basic users do not.
- A user should be able to attach an image to an entry.
- Add support for users to add comments onto a entry.
- Add support for users to tag other users in a comment.
- Integrate any third party API
- Contractor entries will have a 6 month lifespan.  Before 6 months, the contractor will have 
  the  ability to renew the entry.  If six months passes, the entry will be marked inactive 
  and removed from the search results.  After 12 months the entry will be deleted automatically.

### Recommendations

- Authentication and Authorization
  -  Use bcryptJS for password encryption.

- Server-Side

- Client-Side
- [Recommendation] Many of the input fields for entry creation are shared with entry editing. You may be able to create the same page/modal for entry creation and entry editing.
- [Optional] Instead of a page, there can be a modal entry creator popup on Create Entry button click.
- First, create a <FullListPage /> that will fetch all tickets in the database


### User Stories

# User Stories for techNotes

1. [ ] Provide searchable database of construction contractors and subcontractors
2. [ ] Allow the public to search and find basic contact info 
3. [ ] Add a contractor login to enter their companies data 
4. [ ] Provide a welcome page after login 
5. [ ] Provide easy navigation
6. [ ] Display current user and assigned role 
7. [ ] Provide a logout option 
8. [ ] Require contractors to login at least once every six months to renew their entry
9. [ ] Provide a way to remove user access asap if needed 
10. [ ] Contractor entry will assigned to specific user 
11. [ ] Entry will have a basic contact, licensure, and services provided data
12. [ ] Notes are either OPEN or COMPLETED 
13. [ ] Users can be Admin, Contractors, or Customers 
14. [ ] Entries can only be deleted by assigned Contractors or Admins 
15. [ ] Anyone can create a review comment (targeted at customer reviews) against any Contractor entry
16. [ ] Contractors can only edit their assigned entries
17. [ ] Admins can view, edit, and delete all entries and comments 
18. [ ] Only  Admins can access User Settings 
19. [ ] Only Admins can create new Admin users 
 