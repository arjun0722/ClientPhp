import React from 'react'

function Invoice() {
  return (
    <div>
    <h6>Invoice</h6>
<table class="table table-sm">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Invoice</th>
  <th scope="col">View</th>
  <th scope="col">Select as Default</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td><button type="button" class="btn btn-outline-info">Preview</button></td>
  <td>@mdo</td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Jacob</td>
  <td><button type="button" class="btn btn-outline-info">Preview</button></td>
  <td>@fat</td>
</tr>
<tr>
  <th scope="row">3</th>
  <td >Larry the Bird</td>
  <td ><button type="button" class="btn btn-outline-info">Preview</button></td>
  <td>@twitter</td>
</tr>
</tbody>
</table>

</div>
  )
}

export default Invoice