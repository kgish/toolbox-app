require 'test_helper'

class Admin::Dashboard::ToolsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_dashboard_tool = admin_dashboard_tools(:one)
  end

  test "should get index" do
    get admin_dashboard_tools_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_dashboard_tool_url
    assert_response :success
  end

  test "should create admin_dashboard_tool" do
    assert_difference('Admin::Dashboard::Tool.count') do
      post admin_dashboard_tools_url, params: { admin_dashboard_tool: { color: @admin_dashboard_tool.color, content: @admin_dashboard_tool.content, icon: @admin_dashboard_tool.icon, name: @admin_dashboard_tool.name, title: @admin_dashboard_tool.title } }
    end

    assert_redirected_to admin_dashboard_tool_url(Admin::Dashboard::Tool.last)
  end

  test "should show admin_dashboard_tool" do
    get admin_dashboard_tool_url(@admin_dashboard_tool)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_dashboard_tool_url(@admin_dashboard_tool)
    assert_response :success
  end

  test "should update admin_dashboard_tool" do
    patch admin_dashboard_tool_url(@admin_dashboard_tool), params: { admin_dashboard_tool: { color: @admin_dashboard_tool.color, content: @admin_dashboard_tool.content, icon: @admin_dashboard_tool.icon, name: @admin_dashboard_tool.name, title: @admin_dashboard_tool.title } }
    assert_redirected_to admin_dashboard_tool_url(@admin_dashboard_tool)
  end

  test "should destroy admin_dashboard_tool" do
    assert_difference('Admin::Dashboard::Tool.count', -1) do
      delete admin_dashboard_tool_url(@admin_dashboard_tool)
    end

    assert_redirected_to admin_dashboard_tools_url
  end
end
