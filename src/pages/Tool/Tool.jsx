import React from 'react';
import "./Tool.css";
const align = {
    textAlign:'center',
}
const background = {
    backgroundColor:'white',
    width:'90%',
    borderRadius:30,
    margin:'auto'
}
const dropdown = {
    width: '80%',
    height: 30,
    borderRadius:30,
}
const buttons = {
    width: '30%',
    height: 30,
    borderRadius:30,
    backgroundColor: '#FF1493',
    color: 'white',
    fontSize: 15,
    border:'none',
    marginTop:20,
    marginBottom: 10,
    marginLeft:10,
    cursor:'pointer'
}

const Tool= () => {
    return (
        <div className="Leads" style={{ overflowY: 'scroll' }}>
            <h2 style={align}>Promotional Tool</h2>
            <div className='heading-div' style={{ height: 150, backgroundColor: 'black', borderRadius: 20, textAlign: 'center' }}>
                <h3 className='heading-text' style={{ color: 'white', padding: 60, }}>This Creates Better Boundaries</h3>
            </div>

        <div style={background} >
            <h3 class="text-center" style={align}>
            Select an
            <small aria-disabled> offer type</small>
          </h3>

          <div class="input-group" style={align}>
            <select class="custom-select" id="inputGroupSelect01" style={dropdown}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>



          <h3 class="text-center" style={align}>
            Select the
            <small class="text-muted"> Service for discount</small>
          </h3>
          <div class="input-group" style={align}>
            <select class="custom-select" id="inputGroupSelect02" style={dropdown}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

          </div>

        

          <h3 class="text-center" style={align}>
            Valid
            <small class="text-muted"> till</small>
          </h3>
          <div class="input-group mb-3 w-50 mx-auto" style={align}>
            <select class="custom-select" id="inputGroupSelect03" style={dropdown}>
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

        
    

          <div class="tools-btn" style={align}>
            <a href="/"><button type="button" class="btn mb-4" style={buttons}>Save</button></a>
            <a href="/"><button type="button" class="btn mb-4" style={buttons}>Apply</button></a>
          </div>
          </div>

          </div>
          
    );
}

export default Tool;