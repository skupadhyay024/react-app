import React from 'react';
import { connect } from 'react-redux';



class CourseForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
    
        const title = this.getTitle.value;
        const slug = this.getSlug.value;
        const authorId = this.getAuthorId.value;
        const category = this.getCategory.value;
    
        const data = {
            id: new Date(),
            title,
            slug,
            authorId,
            category
        }
    
        this.PaymentResponse.dispatch({
            type:'ADD_COURSE',
            data
        });
    
        console.log(data);
    }

render(){
return ( <>
<h2>Fill Course Details</h2>
<form onSubmit={this.handleSubmit}>
    <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-labelcol-form-label-lg">Title: </label>
        <div className="col-sm-8">
            <input type="text" className="form-control" id="title" ref={(input) => this.getTitle = input}/>
        </div>
    </div>
    <div className="form-group row">
        <label htmlFor="slug" className="col-sm-2 col-form-labelcol-form-label-lg">Slug: </label>
        <div className="col-sm-8">
            <input type="text" className="form-control" id="slug" ref={(input) => this.getSlug = input}/>
        </div>
    </div>
    <div className="form-group row">
        <label htmlFor="authorId" className="col-sm-2 col-form-labelcol-form-label-lg">AuthorId: </label>
        <div className="col-sm-8">
            <input type="text" className="form-control" id="authorId" ref={(input) => this.getAuthorId = input}/>
        </div>
    </div>

    <div className="form-group row">
        <label htmlFor="category" className="col-sm-2 col-form-labelcol-form-label-lg">Category: </label>
        <div className="col-sm-3">
            <select id="category" className="form-control" ref={(value) => this.getCategory =value}>
                <option value ="JavaScript" defaultValue>JavaScript</option>
                <option value ="Software Practices" >Software Practices</option>
                <option value ="Career" >Career</option>
                <option value ="HTML" >HTML</option>
            </select>
        </div>
    </div>
    <div className="form-group row">
        <div className="col-sm-8">
            <button type="submit" style={{margin:"5px"}} className="btn btn-primary">Submit</button>
            <button type="cancel"  className="btn btn-danger">Cancel</button>
        </div>
    </div>
</form>
</>
)
}

}

export default connect()(CourseForm);