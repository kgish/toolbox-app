module ApplicationHelper
  def active_class(link_path)
    current_page?(link_path) ? 'active' : ''
  end

  def external_link(content)
    /^https?:\/\//.match(content)
  end
end
