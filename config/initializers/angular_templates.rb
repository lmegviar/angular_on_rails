# Workaround for Sprockets3 / angular-rails-templates incompatibility from https://github.com/pitr/angular-rails-templates/issues/93

require 'fileutils'

if Rails.env.development?
  cache_path = Rails.root.join('tmp/cache/assets/development')
  FileUtils.rm_rf(cache_path)

  listener = Listen.to(Rails.root.join('app/assets/templates')) do |modified, added, removed|
    # clearing cache
    FileUtils.rm_rf(cache_path)
  end
  listener.start
end