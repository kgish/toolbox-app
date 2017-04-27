require 'test_helper'

class Admin::Dashboard::ThemesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_dashboard_theme = admin_dashboard_themes(:one)
  end

  test "should get index" do
    get admin_dashboard_themes_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_dashboard_theme_url
    assert_response :success
  end

  test "should create admin_dashboard_theme" do
    assert_difference('Admin::Dashboard::Theme.count') do
      post admin_dashboard_themes_url, params: { admin_dashboard_theme: { name: @admin_dashboard_theme.name } }
    end

    assert_redirected_to admin_dashboard_theme_url(Admin::Dashboard::Theme.last)
  end

  test "should show admin_dashboard_theme" do
    get admin_dashboard_theme_url(@admin_dashboard_theme)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_dashboard_theme_url(@admin_dashboard_theme)
    assert_response :success
  end

  test "should update admin_dashboard_theme" do
    patch admin_dashboard_theme_url(@admin_dashboard_theme), params: { admin_dashboard_theme: { name: @admin_dashboard_theme.name } }
    assert_redirected_to admin_dashboard_theme_url(@admin_dashboard_theme)
  end

  test "should destroy admin_dashboard_theme" do
    assert_difference('Admin::Dashboard::Theme.count', -1) do
      delete admin_dashboard_theme_url(@admin_dashboard_theme)
    end

    assert_redirected_to admin_dashboard_themes_url
  end
end
