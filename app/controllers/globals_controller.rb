class GlobalsController < AdminController
  before_action :set_global, only: [:show, :edit, :update, :destroy]

  # GET /globals
  # GET /globals.json
  def index
    @globals = Global.all.paginate(:page => params[:page]).order('id ASC')
  end

  # GET /globals/1
  # GET /globals/1.json
  def show
  end

  # GET /globals/new
  def new
    @global = Global.new
  end

  # GET /globals/1/edit
  def edit
  end

  # POST /globals
  # POST /globals.json
  def create
    @global = Global.new(global_params)

    respond_to do |format|
      if @global.save
        format.html { redirect_to @global, notice: 'Global was successfully created.' }
        format.json { render :show, status: :created, location: @global }
      else
        format.html { render :new }
        format.json { render json: @global.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /globals/1
  # PATCH/PUT /globals/1.json
  def update
    respond_to do |format|
      if @global.update(global_params)
        format.html { redirect_to @global, notice: 'Global was successfully updated.' }
        format.json { render :show, status: :ok, location: @global }
      else
        format.html { render :edit }
        format.json { render json: @global.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /globals/1
  # DELETE /globals/1.json
  def destroy
    @global.destroy
    respond_to do |format|
      format.html { redirect_to globals_url, notice: 'Global was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_global
      @global = Global.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def global_params
      params.require(:global).permit(:key, :value, :description)
    end
end
