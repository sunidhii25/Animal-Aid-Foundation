import React from "react";
import AdminHeader from "../Header/AdminHeader";
const BlogPost = () => {
  
  return (
    <div>
      <AdminHeader/>
      <div class="container-fluid">
    <div class="container my-4  ">
        <h2 class="text-center">Let's Talk</h2>

        <div class="mb-3">
            <label for="title" class="form-label">Title for the thread</label>
            <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
            <div id="emailHelp" class="form-text">The discussion about the thread</div>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Enter Description"/>
        </div>

        <button type="submit" id="add" class="btn btn-primary">Push Talk</button>
        <div id="items" class="my-4">
            <h2>All Threads</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Thread No.</th>
                        <th scope="col">Talk Name</th>
                        <th scope="col">Talk</th>
                        <th scope="col">remove Talk</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <tr>
                        <th scope="row">1</th>
                        <td>Government Law</td>
                        <td>There are real reasons why laws are not followed by the people in the way it should be...</td>
                        <td><button class="btn btn-primary"><a href="https://prsindia.org/theprsblog" target="_blank">Read More</a></button></td>
                    </tr>
                    <hr/>
                    <tr>
                        <th scope="row">2</th>
                        <td>Aarey Trees Cutting</td>
                        <td>Aarey is one of the important habitat for wildlife as well as important for the humans to sustain....</td>
                        <td><button class="btn btn-primary"><a href="https://www.hindustantimes.com/india-news/2-141-trees-cut-in-aarey-colony-mumbai-metro-says-hopes-to-meet-project-deadline/story-YYjZGXAXqcbdeWPw5nhRSP.html" target="_blank">Read More</a></button></td>
                    </tr>
                    <hr/>

                </tbody>
            </table>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
   <script src=""></script>

    </div>
    </div>
  );
};

export default BlogPost;
