/** @jsx React.DOM */
window.Repeater = React.createClass({
  render: function() {

    var scope = this.props.scope;

    var rows = _.map(scope.data, function(row){
      var clickHandler = scope.$apply.bind(
          scope,
          scope.delete_blog.bind(null, row)
        );

      return (
        <tr>
          <td>{row['title']}</td>
          <td>{row['createdAt']}</td>
          <td><a href={'/post/' + row['slug'] + '/' + row['id']}>Post</a></td>
          <td><a href={'#edit/' + row['id']}>Edit</a></td>
          <td><a href="javascript:void(0)" onClick={clickHandler}>Delete</a></td>
        </tr>
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
});