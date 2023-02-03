import React from 'react';
import "./Tool.css";

const buttons = {
  width: '20%',
  height: 30,
  borderRadius: 30,
  backgroundColor: '#FF1493',
  color: 'white',
  fontSize: 13,
  border: 'none',
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 10,
  cursor: 'pointer'
}

const Tool = () => {
  return (
    <div className="Leads" style={{ overflowY: 'scroll' }}>
      <div className='heading-div' style={{ height: 100, width: 'auto', backgroundColor: 'black', textAlign: 'center' }}>
        <h3 className='heading-text' style={{ color: 'white', padding: 35,float:'left',fontSize:'25px' }}>Promotional Tool</h3>
      </div>
      <div className='heading-div2' style={{ height: 150, width: 'auto', backgroundColor: 'rgba(128,128,128,0.3)', textAlign: 'center' }}>
        <h3 className='heading-text2' style={{ color: 'black', padding: 60 }}>People Looking for MUA</h3>
      </div>

      <section class="tools-list" style={{marginTop:'50px'}}>

        <h3 class="text-center">
          Select an
          <small class="text-muted"> offer type</small>
        </h3>

        <div class="input-group mb-3 w-50 mx-auto">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <br />
        <br />


        <h3 class="text-center">
          Select the
          <small class="text-muted"> Service for discount</small>
        </h3>
        <div class="input-group mb-3 w-50 mx-auto">
          <select class="custom-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>

        <br />
        <br />

        <h3 class="text-center">
          Valid
          <small class="text-muted"> till</small>
        </h3>
        <div class="input-group mb-3 w-50 mx-auto">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <br />


        <div class="tools-btn text-center">
          <button type="button" class="btn mb-4" style={ buttons }>Save & Exit</button>
          <button type="button" class="btn mb-4" style={ buttons }>Apply</button>
        </div>
      </section>




    </div>

  );
}

export default Tool;