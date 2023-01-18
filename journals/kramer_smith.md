## January 17th, 2023
    Today, Angel drove. We all worked on consolidating of all the RTK
queries into one file. We needed to consolidate it all into one file because
we needed to invalidate a tag that was in another file. So we just decided
to put all of the queries and mutations in one file. We then created an
AdoptionDetailModal and updated the activeModal and setActiveModal modal
like variables and functions to better reflect which modals they are for to
help eliminate confusion as we have a lot of modals. Such as
activeAdoptionDetailModal. We then added a password confirmation field to
the SignUpForm and we're not checking that the password and the password
confirmation match.

    Today reaffirmed why Redux is so popular. Invalidating the ListDogs tag
made the ListDogs query update so whenever we file a new adoption, ListDogs
does not display the dog from the adoption as it's no longer available for
adoption. That's much simpler than forcing the useEffect to run again and
update the list of available dogs.


## January 13th, 2023
    Today, we worked using Redux to handle the state of the authorization.
Ryan drove while we all worked through the day's problems and goals. Some of
the members of the group were hesitant to do this because they had put so
effort into writing the code for authorization without Redux, but after we
worked through it, we all really saw the benefit of Redux. It really cleans
up your code and makes updating state on multiple components much easier.


## January 11th, 2023
    Today, we worked on filtering the dogs in the dogs list by the dogs that
hadn't been adopted. This meant we needed to change the boolean value for
is_adopted in the dogOut model to be truthy whenever a new adoption is filed
for that specific dog. One of the things we needed to do to accomplish this
was, we had to change the SQL in the adoption_in_to_out method in the
AdoptionQueries. I'm beginning to to really enjoy SQL DDL. I thought the
code we wrote to accomplish that was really clever. After that, we worked on
the logout button and feature. We used the useContext hook, but it was a lot
of work, and very confusing. We asked a SEIR for help, but ended up deleting
what the SEIR told us to do after Triston had a better, cleaner solution.

    Today, I learned some cool new tricks with the SQL DDL and useContext. I
also got lots of practice passing props into other components.


## January 10th, 2023
    Today, we worked in a group of five. I drove. Yesterday, the group of
three, Ryan, Triston, and Angel, worked on the authentication of the
project. Authorization was a blocker for all the other components on the
site, so we all worked on authorization together. We completed authorization
for the dog components and all walked away with a much better understanding of
authorization.


## January 9th, 2023
    Today we broke up the larger group into groups of three and two.
Michelle and I were the group of two. I drove and Michelle navigated. We
got ListDogs, DogDetailModal, and most of AddDogModal completed. It was
nice to go back to React. Today also really helped build my skills in
updating state and creating modals.


## January 6th, 2023

    Today, Angel and I drove. While Angel was driving, the rest of the team
and I guided him through setting up authentication. When it was my turn to
drive, Angel and the rest of the team guided me through setting up authorization,
correcting bugs we had in several routes, and corrected a few models. Now,
all of our routes are working bug free.

As I'm writing this, I'm realizing that I need to take notes to have better
journal entries.

Today really helped me understand FastAPI much better. Watching lectures and
reading explorations is good, but actually being the one typing out the code
really helps it sink in. I have a much better understanding of queries and
routes.